import ModalDelete from "./ModalDelete";
import UserCard from "./UserCard";

const UserList = ({users, deleteUsers, handleUpdate, handleOpenModalDelete}) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_270px)] justify-center max-w-[1000px] mx-auto gap-5 py-10">
        {
            users.map((user)=>(
               <UserCard key={user.id} userInfo={user} deleteUsers={deleteUsers} handleOpenModalDelete={handleOpenModalDelete} handleUpdate={handleUpdate}/> 
            ))
        },
        {
          users.map((user)=>(
            <ModalDelete key={user.id} user={user} deleteUsers={deleteUsers}/>
        ))
        }
    </section>
  )
}

export default UserList
