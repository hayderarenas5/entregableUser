import { IconSquareRoundedXFilled } from "@tabler/icons-react"

const ModalDelete = ({isShowModalDelete, handleClosedModalDelete, deleteUsers, users}) => {
  return (
    
    <section className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 flex justify-center items-center px-3 transition-all duration-300 ${isShowModalDelete ?"visible opacity-100" : "invisible opacity-0"}`}>
        <div className="bg-white w-[300px] h-[150px] grid gap-2 p-2 pb-2 relative">
            <h1 className="text-lg font-bold">Eliminar usuario</h1>
            <button onClick={handleClosedModalDelete} type="button" className="text-red-600 top-1 right-1 hover:text-red-700 transition-colors absolute">
            <IconSquareRoundedXFilled />
        </button>
            <p>¿Deseas eliminar este usuario?</p>
            <button onClick={() => deleteUsers(users.id)} className="bg-[#555A88] text-white">Aceptar</button>
        </div>
    </section>
  )
}

export default ModalDelete
