const validationEmail={
    required:{
    value:true,
    message: "Este campo es requerido"
  },
  pattern:{
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "El correo que ingreso no es valido"
  },
  maxLength:{
    value:150,
    message: "Este campo no acepta más de 150 carácteres"
  }
}
const validation={
    required:{
        value:true,
        message: "Este campo es requerido"
      },
      maxLength:{
        value:25,
        message: "Este campo no acepta más de 25 carácteres"
      }
}
export {
    validationEmail,
    validation
}