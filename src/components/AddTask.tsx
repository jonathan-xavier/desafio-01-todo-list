import styles from './AddTask.module.css'
import { SetStateAction, useState} from 'react'




export function AddTask(){
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
        setInputValue(event.target.value)
    }

    const handleClick = () => {
       console.log(inputValue) 
    }

 
    return(
        <div className={styles.content}>
            <input className={styles.input} value={inputValue} onChange={handleChange} type="text" placeholder='Adicione uma nova tarefa'/>
            <button className={styles.addButton}  onClick={handleClick}>Criar +</button>
        </div>
    )
}