import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import './global.css'
import styles from './App.module.css'

function App() {


  return (
    <div>
        <Header/>
        <div className={styles.wrapper}>
          <AddTask/>

        </div>
    </div>
    
  )
}

export default App
