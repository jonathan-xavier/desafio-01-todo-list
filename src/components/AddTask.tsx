import styles from './AddTask.module.css'

export function AddTask(){
    return(
        <div className={styles.content}>
            <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa'/>
            <button className={styles.addButton}>Criar +</button>
        </div>
    )
}