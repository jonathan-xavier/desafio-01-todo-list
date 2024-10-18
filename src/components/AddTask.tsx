import styles from './AddTask.module.css'
import { SetStateAction, useState} from 'react'
import tasks from '../mock'
import { ListTask } from './ListTask'



export function AddTask(){
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
        setInputValue(event.target.value)
    }

    const handleClick = () => {
       console.log(inputValue) 
       console.log(tasks)
    }

    return(
        <div>

            <div className={styles.content}>
                <input className={styles.input} value={inputValue} onChange={handleChange} type="text" placeholder='Adicione uma nova tarefa'/>
                <button className={styles.addButton}  onClick={handleClick}>Criar +</button>
            </div>

            <div className={styles.contentList}>

                <div className={styles.headerContentList}>
                    <span className={styles.taskCreate}>Tarefas criadas<span>5</span></span>
                    <span className={styles.taskDone}>Concluidas <span>2 de 5</span></span>
                </div>
                <div className={styles.list}>
                    {tasks.map(task => 
                        <ListTask key={task.id} {...task} />
                    )}
                </div>
            </div>
        </div>
    )
}