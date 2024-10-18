import { IList } from '../model/List'
import styles from './ListTask.module.css'
import { Trash } from '@phosphor-icons/react'

export function ListTask(list: IList){
    
    return (
        <div className={styles.main}>
            <span className={styles.container}>{list.title}

                <button onClick={()=>{
                    alert('excluir')
                }}>
                    <Trash size={20}/>
                </button>

            </span>
        </div>
    )
}

