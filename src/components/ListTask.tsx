import { IList } from "../model/List";
import styles from "./ListTask.module.css";
import { Trash, Circle } from "@phosphor-icons/react";

export function ListTask(list: IList) {
  return (
    <div className={styles.main}>
      <span className={styles.container}>{list.title}</span>

      <button
        className={styles.circle}
        onClick={() => {
          alert("checked");
        }}>
        <Circle size={20} />
      </button>

      <button
        className={styles.trash}
        onClick={() => {
          alert("excluir");
        }}>

        <Trash size={20} />
      </button>
    </div>
  );
}

//ira listar os itens e ira excluir os itens
//e marcar como feito com um check.
