import {v4 as uuidv4} from 'uuid';
import { IList } from './model/List';


const tasks:IList[] = [
    {
        id: uuidv4(),
        title: 'terminar o desafio',
        isCompleted: true
    },

    {
        id: uuidv4(),
        title: 'Estudar react',
        isCompleted: false
    },

    {
        id: uuidv4(),
        title: 'Estudar typescript',
        isCompleted: false
    },
]


export default tasks