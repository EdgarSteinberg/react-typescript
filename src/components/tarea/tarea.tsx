import Button from 'react-bootstrap/Button';
import styles from './styles.module.css'

type TareaProps = {
    tarea: string
    borrarTarea: () => void
}

const Tarea = ({ tarea, borrarTarea }: TareaProps) => {
    return (
        <>
            <div className={styles.flex}>
                <p className={styles.text}>{tarea}</p>
                <Button className={styles.btn} onClick={borrarTarea} variant="danger">Eliminar</Button>
            </div>
        </>
    )
}

export default Tarea