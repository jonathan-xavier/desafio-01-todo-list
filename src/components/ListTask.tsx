import { IList } from "../interface/List";
import styles from "./ListTask.module.css";
import { Trash, Circle } from "@phosphor-icons/react";

const ListTaskItem: React.FC<IList> = (list, onDelete) => {
  

  const deletarTask = (idItem: string) => {
    onDelete(idItem)
  }
    
  return (
    <div className={styles.main}>
      <div className={styles.button_and_icon}>

        <button
          className={styles.circle}
          onClick={() => {
            alert("checked");
          }}>
          <Circle size={20} />
        </button>
        <p className={styles.container_title}>{list.title}</p>
      </div>
      <div className={styles.trash_button}>
        
        <button
          className={styles.trash}
            onClick={() => deletarTask(list.id)}
          >

          <Trash size={20} />
        </button>
      </div>    
    </div>
  );
}

export {ListTaskItem}
//ira listar os itens e ira excluir os itens
//e marcar como feito com um check.
