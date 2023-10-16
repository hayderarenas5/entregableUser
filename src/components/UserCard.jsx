import { IconEditCircle, IconTrash, IconUserCheck } from "@tabler/icons-react";

const User = ({userInfo, handleUpdate, deleteUsers/* , handleOpenModalDelete */}) => {
  return (
    <article className="border-2 p-2 rounded-lg">
        <h5 className="flex gap-2 items-center text-lg font-semibold uppercase pb-2">{<span className="px-1"> < IconUserCheck /></span>}{userInfo.first_name} {userInfo.last_name} </h5>
        <hr />
        <ul className="grid gap-1 px-2">
            <li><span className="text-slate-400">Correo</span><br></br> {userInfo.email}</li>
            <li><span className="text-slate-400">Cumpleaños</span><br></br> {userInfo.birthday}</li>
        </ul>
        <div className="flex gap-2 justify-end">
            <button onClick={()=>handleUpdate(userInfo)} className="bg-yellow-500 hover:bg-yellow-600 transition-colors text-white p-1 rounded-md">
                <IconEditCircle size={20}/>
            </button>
            <button onClick={() => deleteUsers(userInfo.id)} className="bg-[#D85D5D] hover:bg-[#D93F3F] transition-colors text-white p-1 rounded-md">
                <IconTrash size={20}/>
            </button>
        </div>
    </article>
  )
}

export default User
