import { IList } from '../model/List'
// import styles from './ListTask.module.css'

export function ListTask(list: IList){

    return (
        <div>
            <ul>
                <li>{list.title}</li>
            </ul>
        </div>
    )
}

