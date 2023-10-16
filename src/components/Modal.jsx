import { IconSquareRoundedXFilled } from "@tabler/icons-react"
import { validationEmail, validation } from "../constants/validation"

const Modal = ({isShowModal, handleClosedModal, handleSubmit, submit, register, idUserEdit, errors}) => {
  

  return (
    <section className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 flex justify-center items-center px-3 transition-all duration-300 ${isShowModal ?"visible opacity-100" : "invisible opacity-0"}`}>
        <form onSubmit={handleSubmit(submit)} className="bg-white p-3 rounded-md grid gap-3 w-[min(100%,_280px)] relative">
        <h2 className="text-center text-lg font-semibold">{idUserEdit ? "Actualizar" : "Crear Usuario"}</h2>
        <button onClick={handleClosedModal} type="button" className="text-red-600 top-1 right-1 hover:text-red-700 transition-colors absolute">
            <IconSquareRoundedXFilled />
        </button>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="email">Correo <span className="text-red-500">*</span></label>
          <input className="outline-none border px-2 py-1 " id='email' type="email" {...register("email", validationEmail)} />
          {
            errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>
          }
        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="password">Contraseña <span className="text-red-500">*</span></label>
          <input className="outline-none border px-2 py-1 rounded-sm" id='password' type="text" {...register("password", validation)}/>
          {
            errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>
          }
        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="first_name">Nombre <span className="text-red-500">*</span></label>
          <input className="outline-none border px-2 py-1 rounded-sm"  id='first_name' type="text" {...register("first_name", validation)}/>
          {
            errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>
          }
        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="last_name">apellido <span className="text-red-500">*</span></label>
          <input className="outline-none border px-2 py-1 rounded-sm"  id='last_name' type="text" {...register("last_name", validation)}/>
          {
            errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>
          }
        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="birthday">Cumpleaños </label>
          <input className="outline-none border px-2 py-1 rounded-sm" id='birthday' type="date" {...register("birthday")}/>
        </div>
        <div className="grid gap-1 ">
          <label className="font-light" htmlFor="birthday">Guardar url de imagen </label>
          <input className="outline-none border px-2 py-1 rounded-sm" id='birthday' type="strings" {...register("image_url")}/>
        </div>
        <button className="bg-[#555A88] text-white p-2 px-4 uppercase font-semibold rounded-sm hover:bg-[#41456d] transition-colors" type='submit'>{idUserEdit ? "Guardar Cambios" : "Crear Usuario"}</button>
      </form> 
    </section>
  )
}

export default Modal
