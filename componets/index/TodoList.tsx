import styles from "../../styles/Home.module.css";
import { useState } from "react";


const TodoList = (props: any) => {
  const [list, setList] = useState([
    { text: "Study React", isDone: false },
    { text: "Build a Web project", isDone: true },
    { text: "Learnning non stop", isDone: false },
  ]);

  const [item, setItem] = useState({});

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addList(item);
  };

  const addList = (item: any) => {
    if (item !== "") {
      const newList = [...list, { text: item, isDone: false }];
      setList(newList);
    };
  }

  const handleDelete = (index: any) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleDone = (index: any) => {
    const newList = [...list];
    console.log(typeof (newList));
    newList[index].isDone = true;
    setList(newList)
  };

  return (
    <>
      <div className={styles.bodyOuterDiv}>
        <div className={styles.bodyInnerDiv}>
          <div style={{ margin: "auto", width: "auto" }}>
            It's Austin7L {props.pageName} Page
          </div>
          <div >
            <div style={{ marginTop: "20px" }}>
              <form>
                待辦事項:
                <input type="text" onChange={(e) => { setItem(e.target.value) }} style={{ width: "350px", backgroundColor: "transparent" }} />
                <input type="submit" onClick={handleSubmit} style={{ width: "70px", height: "32px", textAlign: "center" }} />
              </form>
            </div>
            <div className={styles.todoListDiv} style={{ marginTop: "20px" }}>
              <ul>
                {list.map((item, index) => {
                  return (
                    <li key={index} className={styles.todoListOuterLi} >
                      <div className={item.isDone ? styles.todoListItemsWithIsDone : styles.todoListItems}>
                        {item.text}
                      </div>
                      <div className={styles.todoListImgDiv}>
                        <img src="/icons/correct_32px.png" className={styles.todoListImg} onClick={() => { handleDone(index) }} />
                        <img src="/icons/bin_32px.png" className={styles.todoListImg} onClick={() => { handleDelete(index) }} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default TodoList;