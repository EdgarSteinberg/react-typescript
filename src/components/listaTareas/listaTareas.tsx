import Tarea from "../tarea/tarea"

type ListaTareasProps = {
    listaTareas: string[]
    borrarTarea: (index: number) => void
}

const ListaTareas = ({listaTareas, borrarTarea}: ListaTareasProps) => {
    return (
        <>
        {listaTareas.map((tarea,index) => (
            <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}/>
        ))}
        </>
    )
}

export default ListaTareas 