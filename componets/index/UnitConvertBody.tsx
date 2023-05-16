import styles from "../../styles/Home.module.css";
import { useState, useEffect, useCallback } from "react";

const UnitConvertBody = (props: any) => {
  // 長度
  const [mmValue, setMMValue] = useState("");
  const [cmValue, setCMValue] = useState("");
  const [mValue, setMValue] = useState("");
  const [kmValue, setKMValue] = useState("");

  // 重量
  const [gValue, setGValue] = useState("");
  const [kgValue, setKGValue] = useState("");
  const [kValue, setKValue] = useState("");
  const [tkgValue, setTKGValue] = useState("");

  const [unitType, setUnitType] = useState("");
  const [focusElement, setFoucusElement] = useState("");


  const handleInput = (e: any) => {
    switch (focusElement) {
      case "mm":
        setMMValue(e.target.value)
        break;
      case "cm":
        setCMValue(e.target.value)
        break;
      case "m":
        setMValue(e.target.value)
        break;
      case "km":
        setKMValue(e.target.value)
        break;
      case "g":
        setGValue(e.target.value)
        break;
      case "kg":
        setKGValue(e.target.value)
        break;
      case "k":
        setKValue(e.target.value)
        break;
      case "tkg":
        setTKGValue(e.target.value)
        break;
      default:
        break;
    }
  }

  const handleLengthBroomClick = () => {
    console.log("current broom type: " + unitType);
    if (unitType === "length") {
      setMMValue("");
      setCMValue("");
      setMValue("");
      setKMValue("");
    } else if (unitType === "weight") {
      setGValue("");
      setKGValue("");
      setKValue("");
      setTKGValue("");
    }
  }

  useEffect(() => {
    console.log("outEffect focusElement: " + focusElement)
    console.log("outEffect unitType: " + unitType)
    if (unitType === "length") {
      switch (focusElement) {
        case "mm":
          if (!isNaN(parseFloat(mmValue))) {
            setCMValue((parseFloat(mmValue) / 10).toString());
            setMValue((parseFloat(mmValue) / 1000).toString());
            setKMValue((parseFloat(mmValue) / 1000000).toString());
          }
          break;
        case "cm":
          if (!isNaN(parseFloat(cmValue))) {
            setMMValue((parseFloat(cmValue) * 10).toString());
            setMValue((parseFloat(cmValue) / 100).toString());
            setKMValue((parseFloat(cmValue) / 1000).toString());
          }
          break;
        case "m":
          if (!isNaN(parseFloat(mValue))) {
            setMMValue((parseFloat(mValue) * 1000).toString());
            setCMValue((parseFloat(mValue) * 100).toString());
            setKMValue((parseFloat(mValue) / 1000).toString());
          }
          break;
        case "km":
          if (!isNaN(parseFloat(kmValue))) {
            setMMValue((parseFloat(kmValue) * 1000000).toString());
            setCMValue((parseFloat(kmValue) * 100000).toString());
            setMValue((parseFloat(kmValue) * 1000).toString());
          }
          break;
        default:
          break;
      }
    } else if (unitType === "weight") {
      switch (focusElement) {
        case "g":
          if (!isNaN(parseFloat(gValue))) {
            setKGValue((parseFloat(gValue) / 1000).toString());
            setKValue((parseFloat(gValue) / 100000).toString());
            setTKGValue((parseFloat(gValue) / 600).toString());
          }
          break;
        case "kg":
          if (!isNaN(parseFloat(kgValue))) {
            setGValue((parseFloat(kgValue) * 1000).toString());
            setKValue((parseFloat(kgValue) / 1000).toString());
            setTKGValue((parseFloat(kgValue) / 600000).toString());
          }
          break;
        case "k":
          if (!isNaN(parseFloat(kValue))) {
            setGValue((parseFloat(kValue) * 1000000).toString());
            setKGValue((parseFloat(kValue) * 1000).toString());
            setTKGValue((parseFloat(kValue) / 600000000).toString());
          }
          break;
        case "tkg":
          if (!isNaN(parseFloat(tkgValue))) {
            setGValue((parseFloat(tkgValue) * 600).toString());
            setKValue((parseFloat(tkgValue) * 600000).toString());
            setKGValue((parseFloat(tkgValue) * 6000000000).toString());
          }
          break;
        default:
          break;
      }
    }
  })

  useEffect(() => {
    const keyDownHandler = (event: any) => {

      if (event.key === "Enter") {
        handleSubmit(event);
      }
    }
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };

  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault(); // 避免submit重新跳轉
    // switch (focusElement) {
    //   case "mm":
    //     console.log("inside return mmValue:" + mmValue);
    //     console.log("parseFloat" + parseFloat(mmValue) / 100);
    //     setCMValue((parseFloat(mmValue) / 100).toString());
    //     break;

    //   default:
    //     break;
    // }

  };

  return (
    <>
      <div className={styles.bodyOuterDiv}>
        <div className={styles.bodyInnerDiv}>
          <div >
            It's Austin7L {props.pageName} Page
          </div>
        </div>
        <div className={styles.unitConverBodyDiv} onClick={() => { setUnitType("length") }}>
          <form >
            <label>長度/距離換算</label>
            <br />
            <label >毫米:
              <input type="text" value={mmValue} onChange={handleInput}
                onClick={() => { setFoucusElement("mm") }} />
            </label>
            <label>公分:
              <input type="text" value={cmValue} onChange={handleInput}
                onClick={() => { setFoucusElement("cm") }} />
            </label>
            <label>公尺:
              <input type="text" value={mValue} onChange={handleInput}
                onClick={() => { setFoucusElement("m") }} />
            </label>
            <label>公里:
              <input type="text" value={kmValue} onChange={handleInput}
                onClick={() => { setFoucusElement("km") }} />
            </label>
            <br />
          </form>
          <img className={styles.broom} onClick={() => { setUnitType("length"), handleLengthBroomClick() }} />
        </div>
        <br />
        <div className={styles.unitConverBodyDiv} onClick={() => { setUnitType("weight") }}>
          <form >
            <label>重量換算</label>
            <br />
            <label >克:
              <input type="text" value={gValue} onChange={handleInput}
                onClick={() => { setFoucusElement("g") }} />
            </label>
            <label>公斤:
              <input type="text" value={kgValue} onChange={handleInput}
                onClick={() => { setFoucusElement("kg") }} />
            </label>
            <label>公噸:
              <input type="text" value={kValue} onChange={handleInput}
                onClick={() => { setFoucusElement("k") }} />
            </label>
            <label>臺斤:
              <input type="text" value={tkgValue} onChange={handleInput}
                onClick={() => { setFoucusElement("tkg") }} />
            </label>
            <br />
          </form>
          <img className={styles.broom} onClick={() => { setUnitType("weight"), handleLengthBroomClick() }} />
        </div>
      </div>
    </>
  );
};

export default UnitConvertBody;