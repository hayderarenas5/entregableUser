/* import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BASE_URL } from './constants/users'
import UserList from './components/UserList'
 */
/* function App() {

  const [users, setUser]=useState([])
  
  const createUser=(data, form)=>{
    axios.post(BASE_URL + "/users/", data)
    .then(()=>{
      axios.get(BASE_URL +"/users/" )
      .then(({data})=> setUser(data))
      .catch((err)=> console.log(err))
      /* getAllUser() */
     /*  form.reset()
    })
    .catch((err)=>console.log(err))
  } */

  /* const getAllUser=()=>{
    axios.get(BASE_URL +"/users/" )
      .then(({data})=> setUser(data))
      .catch((err)=> console.log(err))
  } */

 /*  const handleSubmit=(e)=>{
    e.preventDefault()
    const fordata=new FormData(e.target)
    /*fordata.get("email")*/
   /*  const data=Object.fromEntries(fordata)
    createUser(data, e.target)
    
  } */ 
  /* useEffect(()=>{
    axios.get(BASE_URL +"/users/")
      .then(({data})=> setUser(data))
      .catch((err)=> console.log(err))
  }, []) */ 
/* 
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>Crear usuario</h2>
        <div>
          <label htmlFor="email">Correo: </label>
          <input id='email'name='email' type="name" />
        </div>
        <div>
          <label htmlFor="password">Contraseña: </label>
          <input id='password'name='password'type="text" />
        </div>
        <div>
          <label htmlFor="first_name">Nombre: </label>
          <input id='first_name'name='first_name' type="text" />
        </div>
        <div>
          <label htmlFor="last_name">apellido: </label>
          <input id='last_name'name='last_name' type="text" />
        </div>
        <div>
          <label htmlFor="birthday">Cumpleaños: </label>
          <input id='birthday'name='birthday' type="date" />
        </div>
        <div>
          <label htmlFor="image_url">Foto: </label>
          <input id='image_url'name='image_url' type="text" />
        </div>
        <button type='submit'>Crear pelicula</button>
      </form>
      <UserList users={users}/>
    </main>
  ) */
/* }  */
/* 
export default App */
