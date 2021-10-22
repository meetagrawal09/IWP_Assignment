import './App.css';
import React,{useState,useEffect} from 'react';


function App() {

  const [update,setUpdate] = useState(false)
  
  const [users,setUsers] = useState([])

  const [user,setUser] = useState({})

  useEffect(()=>{
    getUsers()
  },[])

  const getUsers=()=>{
    fetch('http://localhost:4000/users')
      .then((response)=>response.json())
      .then((data)=>{
        setUsers(data);
        console.log(data)
      }) 
      .catch(console.log('ERROR:in getting users')) 
  }

  const handleChange = (e)=>{
    const {name,value} = e.target
    setUser({...user,
      [name]:value
    })
  }

  const handleUpdate = (ele)=>{
    console.log('update')
    setUpdate(true)
    setUser(ele)
  }

  const handleSubmit = (e)=>{
      e.preventDefault()

      var url = 'http://localhost:4000/users'

      var method = 'POST'

      if(update === true)
      {
          url = `http://localhost:4000/users/${user._id}`
          setUpdate(false)
          method = 'PATCH'
      }
      
      fetch(url ,{
        method: method,
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify(user)
      })
      .then((response)=> {
          setUser({})
          console.log('here')
          console.log('RESPONSE IS:',response)
          getUsers()
      })
      .catch(function(error){
          console.log('ERROR:',error)
      })
  }

  const handleDelete = (ele)=>{

    fetch(`http://localhost:4000/users/${ele._id}`,{
      method:'DELETE',
      headers:{
          'Content-type':'application/json',
      },
    })
    .then((response)=>{
        console.log(response)
        getUsers()
      }
    )
    .catch((err)=>console.log(err))
  }

  return (

    <div className="App">
      <h1>Hello world</h1>

      {users.map(function (user) {
         return <div key={user.id}>
            <p>{user.name}</p>
            <button onClick={(()=>handleUpdate(user))}>Update</button>
            <button onClick={(()=>handleDelete(user))}>Delete</button>
          </div>
      })}

      <form onSubmit={handleSubmit}>
        <input type="text" name = "name" onChange={handleChange} placeholder="Name" value={user?.name}/>
        <input type="text" name = "email" onChange={handleChange} placeholder="Email" value={user?.email}/>
        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
