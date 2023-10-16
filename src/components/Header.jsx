import { IconPlus } from "@tabler/icons-react"

const Header = ({handleOpenModal}) => {
  return (
    <header className="flex justify-between pt-6 gap-3 px-24">
      <h1 className="text-3xl font-bold">Usuarios</h1>
      <button onClick={handleOpenModal} className="bg-[#555A88] text-white p-2 px-4 uppercase flex gap-1 font-semibold rounded-md hover:bg-[#41456d] transition-colors">
        <IconPlus />Crear nuevo usuario
      </button>
    </header>
  )
}

export default Header
