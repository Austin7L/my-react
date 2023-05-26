import { useState, useEffect, useRef, useLayoutEffect } from "react";
import styles from "../../styles/Home.module.css";


const TodoList = (props: any) => {

  interface listData {
    text: string,
    isDone: boolean,
    viewMode?: { display: string },
    editMode?: { display: string },
  }

  var viewMode = {
    display: ''
  };
  var editMode = {
    display: 'none'
  };

  const [list, setList] = useState<listData[]>([]);

  const [item, setItem] = useState("");

  const [updateValue, setUpdateValue] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addList(item);
  };

  const addList = (item: string) => {
    if (item !== "") {
      const newList: listData[] = [...list, { text: item, isDone: false, viewMode: { display: '' }, editMode: { display: 'none' } }];
      localStorage.setItem('listData', JSON.stringify(newList));
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

  const handleEdit = (index: any) => {
    handleMode("edit", index);
    setUpdateValue(list[index].text);
  };

  const handleUpdate = (index: any) => {
    const newList = [...list];
    newList[index].text = updateValue;
    setList(newList);
    localStorage.setItem('listData', JSON.stringify(newList));
    handleMode("view", index);
  };

  const handleCancel = (index: any) => {
    handleMode("view", index);
  };

  const handleMode = (value: string, index: any) => {
    const newList: listData[] = [...list];
    switch (value) {
      case "view":
        console.log("value: " + value);
        newList[index].viewMode = { display: '' };
        newList[index].editMode = { display: 'none' };
        break;
      case "edit":
        newList[index].viewMode = { display: 'none' };
        newList[index].editMode = { display: '' };
        break;
      default:
        break;
    }
    setList(newList);
    localStorage.setItem('listData', JSON.stringify(newList));
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('listData') || '[]');

    if (typeof list[0] === 'undefined') setList([]); // 避免初始化後的空陣列

    setList(localData);
    return () => {
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
                      <div className={item.isDone ? styles.todoListItemsWithIsDone : styles.todoListItems} style={item.viewMode}>
                        {item.text}
                      </div>
                      <textarea className={styles.todoListTextArea} value={updateValue}
                        onChange={(e) => { setUpdateValue(e.target.value) }} style={item.editMode} />
                      <div className={styles.todoListImgDiv}>
                        <img src="/icons/edit_32px.png" className={styles.todoListImg} onClick={() => { handleEdit(index) }}
                          style={item.viewMode} />
                        <img src={item.isDone ? "/icons/check_mark_done_32px.png" : "/icons/check_mark_32px.png"}
                          className={styles.todoListImg} onClick={() => { handleDone(index) }} style={item.viewMode} />
                        <img src="/icons/bin_32px.png" className={styles.todoListImg} onClick={() => { handleDelete(index) }}
                          style={item.viewMode} />
                        <img className={styles.todoListTempImg} style={item.editMode} />
                        <img src="/icons/save_32px.png" className={styles.todoListImg} onClick={() => { handleUpdate(index) }}
                          style={item.editMode} />
                        <img src="/icons/cancel_32px.png" className={styles.todoListImg} onClick={() => { handleCancel(index) }}
                          style={item.editMode} />
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