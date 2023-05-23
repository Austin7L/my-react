import { useState, useEffect, useRef, useLayoutEffect } from "react";
import styles from "../../styles/Home.module.css";


const TodoList = (props: any) => {

  interface listData {
    text: string,
    isDone: boolean;
  }

  const [list, setList] = useState<listData[]>([]);

  const [item, setItem] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addList(item);
  };

  const addList = (item: any) => {
    if (item !== "") {
      const newList = [...list, { text: item, isDone: false }];
      localStorage.setItem('listData', JSON.stringify([...list, { text: item, isDone: false }]));
      setList(newList);
    };
  }

  const handleDelete = (index: any) => {
    const newList = [...list];
    newList.splice(index, 1);
    const devicesArray = JSON.parse(localStorage.getItem('listData') || '');
    devicesArray.splice(index, 1);
    localStorage.setItem('listData', JSON.stringify(devicesArray));
    setList(newList);
  };

  const handleDone = (index: any) => {
    const newList = [...list];
    const devicesArray = JSON.parse(localStorage.getItem('listData') || '');
    if (newList[index].isDone) {
      newList[index].isDone = false;
      devicesArray[index].isDone = false;
    } else {
      newList[index].isDone = true;
      devicesArray[index].isDone = true;
    }
    localStorage.setItem('listData', JSON.stringify(devicesArray));
    setList(newList)
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('listData') || '[{}]');
    console.log("localData: " + localData);

    setList(localData);
    return () => {
      console.log("localData in return: " + localData);
      setList(localData);
    }
  }, []);

  useEffect(() => {
    setItem("");

    return () => {
      setItem("");
    };
  }, [list]);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px` // 抓取元件卷軸高度去調整
  }, [item]);

  return (
    <>
      <div className={styles.bodyOuterDiv} >
        <div className={styles.bodyInnerDiv}>
          <div style={{ margin: "auto", width: "auto" }}>
            It's Austin7L {props.pageName} Page
          </div>
          <div >
            <div style={{ marginTop: "20px" }}>
              <form>
                <div style={{ display: "flex", alignItems: "center" }}>
                  待辦事項:
                  <textarea ref={textAreaRef} value={item} onChange={(e) => { setItem(e.target.value) }}
                    className={styles.todoListInput} />
                  <input type="submit" onClick={handleSubmit} className={styles.todoListSubmit} />
                </div>
              </form>
            </div>
            <div className={styles.todoListDiv} style={{ marginTop: "20px" }}>
              <ul >
                {list.map((item, index) => {
                  return (
                    <li key={index} className={styles.todoListOuterLi} >
                      <div className={item.isDone ? styles.todoListItemsWithIsDone : styles.todoListItems}>
                        {item.text}
                      </div>
                      <div className={styles.todoListImgDiv}>
                        <img src={item.isDone ? "/icons/check_mark_done_32px.png" : "/icons/check_mark_32px.png"}
                          className={styles.todoListImg} onClick={() => { handleDone(index) }} />
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