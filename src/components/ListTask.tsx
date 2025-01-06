
import { useEffect, useState } from "react";
import styles from "./ListTask.module.css";
import { Trash, Circle, CheckCircle } from "@phosphor-icons/react";

const ListTaskItem: React.FC<{
  id: string,
  title: string,
  isCompleted: boolean,
  onDelete: (item: string) => void,
  onChecked: (item: string) => void,
}> = ({ id, title, isCompleted, onDelete, onChecked }) => {

  const [isCompletedTask, setIscompletedTask] = useState(Boolean)

  const handleChecked = () => {
    onChecked(id)
  }

  useEffect(() => {
    setIscompletedTask(isCompleted)
  },[isCompleted])


  return (
    <div className={styles.main}>
      <div className={styles.button_and_icon}>

        <button
          className={styles.circle}
          onClick={handleChecked}>
          {isCompletedTask === true ? <CheckCircle size={20} color="#5E60CE" weight="fill" /> : <Circle size={20} />}  
        </button>
    
        <p>{isCompletedTask === true ? 
          <del className={styles.container_del}>{title}</del>: title}
        </p>
      </div>
      <div className={styles.trash_button}>

        <button
          className={styles.trash}
          onClick={() => onDelete(id)}
        >

          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}

export { ListTaskItem }

