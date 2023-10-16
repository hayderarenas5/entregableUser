import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BASE_URL, EMPTY_FORM } from './constants/users'
import Modal from './components/Modal'
import Header from './components/Header'
import { useForm } from 'react-hook-form'
import UserList from './components/UserList'
/* import ModalDelete from './components/ModalDelete'
 */
function App() {

  const [isShowModal, setIsShowModal]=useState(false)
  /* const [isShowModalDelete, setIsShowModalDelete]=useState(false)
 */
  const [users, setUsers]=useState([])

  const [idUserEdit, setIdUserEdit]=useState(null)

  const {handleSubmit, register, reset, formState} = useForm()

  const {errors} =formState
  

  const submit=(data)=>{
    if (idUserEdit) {
      updateUser(data)
    }else{
      createUser(data)
    }
  }

  const handleClosedModal=()=>{
    setIsShowModal(false)
    reset(EMPTY_FORM)
    setIdUserEdit(null)
    }

  const handleOpenModal=()=>{
    setIsShowModal(true)
  }
  /* const handleOpenModalDelete=()=>{
    setIsShowModalDelete(true)
  } */
  
  /* const handleClosedModalDelete=()=>{
    setIsShowModalDelete(false)
  } */

  const createUser=(data)=>{
    axios
      .post(BASE_URL + "/users/", data)
      .then(()=>{
        getAllUsers()
        handleClosedModal()
      })
      .catch((err)=>console.log(err))
  }

  const deleteUsers=(id)=>{
    axios.delete(BASE_URL + `/users/${id}/`)
      .then(()=> getAllUsers())
      .catch((err)=> console.log(err))
  }

  const handleUpdate=(update)=>{
    handleOpenModal()
    reset(update)
    setIdUserEdit(update.id)
  }

  const updateUser=(data)=>{
    axios
      .put(BASE_URL + `/users/${idUserEdit}/`, data)
      .then(()=>{
        getAllUsers()
        handleClosedModal()
      })
      .catch((err)=> console.log(err))
  }

  const getAllUsers=()=>{
    axios.get(BASE_URL + "/users/")
      .then(({data})=> setUsers(data))
      .catch((err)=> console.log(err))
  }

  useEffect(()=>{
    getAllUsers()
  }, [])  

  return (
    <main className='min-h-screen'>
      <Header handleOpenModal={handleOpenModal}/>
      <Modal isShowModal={isShowModal} handleClosedModal={handleClosedModal} handleSubmit={handleSubmit} submit={submit} register={register} idUserEdit={idUserEdit} errors={errors}/>
      <UserList users={users}  /* handleOpenModalDelete={handleOpenModalDelete} */ handleUpdate={handleUpdate} deleteUsers={deleteUsers}/>
      {/* <ModalDelete isShowModalDelete={isShowModalDelete} handleOpenModalDelete={handleOpenModalDelete} handleClosedModalDelete={handleClosedModalDelete} deleteUsers={deleteUsers} users={users}/> */}
    </main>
  )
}

export default App
