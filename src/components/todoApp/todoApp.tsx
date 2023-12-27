import { useEffect, useState } from "react"
import ListaTareas from "../listaTareas/listaTareas"
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css'

const TodoApp = () => {

    const [newHomework, setnewHomework] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [listaTareas, setListaTareas] = useState<string[]>([])

    useEffect(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
        console.log('Tareas guardadas:', tareasGuardadas);
        setListaTareas(tareasGuardadas)
        setLoading(false); // Marcamos la carga como completada
    },[])

    useEffect(() => {
      if(!loading){
        localStorage.setItem('tareas', JSON.stringify(listaTareas))
        console.log('Tareas almacenadas:', listaTareas);
      }
       
    },[listaTareas, loading])

    const handleAddTask = () =>{
        if(newHomework.trim() === '') return
        setListaTareas(tareasanterioriores => [...tareasanterioriores, newHomework])
        setnewHomework('')
    }
    
    const handleBorrarTarea = (index:number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !==index))
    }

    return (
        <>
            <h1 className={styles.text}>Lista de Tareas</h1>
            <div className={styles.container}>
                <input 
                    className={styles.input}
                    type="text"
                    value={newHomework}
                    onChange={(e) => setnewHomework(e.target.value)}
                    placeholder="Ingrese una nueva tarea"
                />
                <Button className={styles.btn} onClick={handleAddTask} variant="primary">Agregar</Button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}/>
        </>
    )

}

export default TodoApp