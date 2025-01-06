import styles from "./AddTask.module.css";
import React, { SetStateAction, useState } from "react";
import tasks from "../mock";
import { ListTaskItem } from "./ListTask";
import { useMount } from "../util/use-mount";
import { IList } from "../interface/List";
import { v4 as uuidv4 } from "uuid";
import { Notepad} from "@phosphor-icons/react";
const AddTask: React.FC = () => {
  const [myTask, setMyTask] = useState<IList[]>([]);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (!inputValue) {
      return alert("O campo tem que estar preenchido");
    }
    setMyTask((prevTask) => [
      { id: uuidv4(), isCompleted: false, title: inputValue },
      ...prevTask,
    ]);
    setInputValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const deleteItem = (item: string) => {
    myTask.map((task) => {
      if (task.id === item) {
        setMyTask((task) => task.filter((t) => t.id !== item));
      }
    });
  };

  const checkedItemList = (id: string) => {
    setMyTask((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  useMount(async () => {
    setMyTask(tasks);
  });

  return (
    <div>
      <div className={styles.content}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Adicione uma nova tarefa"
          onKeyDown={handleKeyDown}
        />
        <button className={styles.addButton} onClick={handleClick}>
          Criar +
        </button>
      </div>

      <div className={styles.contentList}>
        <div className={styles.headerContentList}>
          <span className={styles.taskCreate}>
            Tarefas criadas <span className={styles.taskDone_completed}>{myTask.length}</span>
          </span>
          <span className={styles.taskDone}>
            Concluidas <span className={styles.taskDone_completed}>{myTask.filter(task => task.isCompleted !== false).length} de {myTask.length}</span>
          </span>
        </div>
        <div className={styles.list}>
          {myTask.map((task) => (
            <ListTaskItem
              key={task.id}
              {...task}
              onDelete={deleteItem}
              onChecked={checkedItemList}
            />
          ))}

          {myTask.length === 0 && <div>
            <div className={styles.nothing_to_show}>
            <span><Notepad size={80} color="#3D3D3D"/></span>
            <p className={styles.text}><span>Você ainda não tem tarefas cadastradas</span><br />
            Crie tarefas e organize seus itens a fazer</p>
            </div>
            
          </div>}
        </div>
      </div>
    </div>
  );
};

export { AddTask };
