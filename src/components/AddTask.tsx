import styles from './AddTask.module.css'
import React, { SetStateAction, useState} from 'react'
import tasks from '../mock'
import { ListTaskItem } from './ListTask'
import { useMount } from '../util/use-mount'
import { IList } from '../interface/List'


const AddTask: React.FC = () => {

    const [myTask, setMyTask] = useState<IList[]>([])
    
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
        setInputValue(event.target.value)
    }

    const handleClick = () => {
       console.log(inputValue) 
       console.log(tasks)
    }

    const deleteItem = (item: string) => {     
        // myTask.map( task => {
            // task.id === item.charAt()
        // })   
        console.log(`Deletar ${item}`)
    }

    useMount(async ()=> {
        setMyTask(tasks)
    })

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
                    {myTask.map(task => 
                        <ListTaskItem key={task.id} {...task} onDelete={deleteItem} />
                    )}
                </div>
            </div>
        </div>
    )
}

export {AddTask}

// fazer a funcionalidade de adicionar task