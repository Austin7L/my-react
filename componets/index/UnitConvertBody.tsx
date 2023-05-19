import { isNumber } from "util";
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

  const handleLengthBroomClick = (type: string) => {
    switch (type) {
      case "length":
        setMMValue("");
        setCMValue("");
        setMValue("");
        setKMValue("");
        break;
      case "weight":
        setGValue("");
        setKGValue("");
        setKValue("");
        setTKGValue("");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (focusElement === 'mm') {
      if (isNaN((Number(mmValue)))) {
        setMMValue(mmValue.substring(0, mmValue.length - 1));
      } else {
        if (!isNaN(parseFloat(mmValue))) {
          setCMValue(parseFloat((parseFloat(mmValue) / 10).toFixed(5)).toString());
          setMValue(parseFloat((parseFloat(mmValue) / 1000).toFixed(5)).toString());
          setKMValue(parseFloat((parseFloat(mmValue) / 1000000).toFixed(5)).toString());
        }
      }
    }
  }, [mmValue]);

  useEffect(() => {
    if (focusElement === 'cm') {
      if (isNaN((Number(cmValue)))) {
        setCMValue(cmValue.substring(0, cmValue.length - 1));
      } else {
        if (!isNaN(parseFloat(cmValue))) {
          setMMValue(parseFloat((parseFloat(cmValue) * 10).toFixed(5)).toString());
          setMValue(parseFloat((parseFloat(cmValue) / 100).toFixed(5)).toString());
          setKMValue(parseFloat((parseFloat(cmValue) / 1000).toFixed(5)).toString());
        }
      }
    }
  }, [cmValue]);

  useEffect(() => {
    if (focusElement === 'm') {
      if (isNaN((Number(mValue)))) {
        setMValue(mValue.substring(0, mValue.length - 1));
      } else {
        if (!isNaN(parseFloat(mValue))) {
          setMMValue(parseFloat((parseFloat(mValue) * 1000).toFixed(5)).toString());
          setCMValue(parseFloat((parseFloat(mValue) * 100).toFixed(5)).toString());
          setKMValue(parseFloat((parseFloat(mValue) / 1000).toFixed(5)).toString());
        }
      }
    }
  }, [mValue]);

  useEffect(() => {
    if (focusElement === 'km') {
      if (isNaN((Number(kmValue)))) {
        setKMValue(kmValue.substring(0, kmValue.length - 1));
      } else {
        if (!isNaN(parseFloat(kmValue))) {
          setMMValue(parseFloat((parseFloat(kmValue) * 1000000).toFixed(5)).toString());
          setCMValue(parseFloat((parseFloat(kmValue) * 100000).toFixed(5)).toString());
          setMValue(parseFloat((parseFloat(kmValue) * 1000).toFixed(5)).toString());
        }
      }
    }
  }, [kmValue]);

  useEffect(() => {
    if (focusElement === 'tkg') {
      if (isNaN((Number(tkgValue)))) {
        setTKGValue(tkgValue.substring(0, tkgValue.length - 1));
      } else {
        if (!isNaN(parseFloat(tkgValue))) {
          setGValue(parseFloat((parseFloat(tkgValue) * 600).toFixed(5)).toString());
          setKValue(parseFloat((parseFloat(tkgValue) * (600 * 1000)).toFixed(5)).toString());
          setKGValue(parseFloat((parseFloat(tkgValue) * (600 * 1000000)).toFixed(5)).toString());
        }
      }
    }
  }, [tkgValue]);

  useEffect(() => {
    if (focusElement === 'g') {
      if (isNaN((Number(gValue)))) {
        setGValue(gValue.substring(0, gValue.length - 1));
      } else {
        if (!isNaN(parseFloat(gValue))) {
          setTKGValue(parseFloat((parseFloat(gValue) / 600).toFixed(5)).toString());
          setKGValue(parseFloat((parseFloat(gValue) / 1000).toFixed(5)).toString());
          setKValue(parseFloat((parseFloat(gValue) / 1000000).toFixed(5)).toString());
        }
      }
    }
  }, [gValue]);

  useEffect(() => {
    if (focusElement === 'kg') {
      if (isNaN((Number(kgValue)))) {
        setKGValue(kgValue.substring(0, kgValue.length - 1));
      } else {
        if (!isNaN(parseFloat(kgValue))) {
          setTKGValue(parseFloat((parseFloat(kgValue) * (1000 / 600)).toFixed(5)).toString());
          setGValue(parseFloat((parseFloat(kgValue) * 1000).toFixed(5)).toString());
          setKValue(parseFloat((parseFloat(kgValue) / 1000).toFixed(5)).toString());
        }
      }
    }
  }, [kgValue]);

  useEffect(() => {
    if (focusElement === 'k') {
      if (isNaN((Number(kValue)))) {
        setKValue(kValue.substring(0, kValue.length - 1));
      } else {
        if (!isNaN(parseFloat(kValue))) {
          setTKGValue(parseFloat((parseFloat(kValue) * (1000000 / 600)).toFixed(5)).toString());
          setGValue(parseFloat((parseFloat(kValue) * 1000000).toFixed(5).toString()).toString());
          setKGValue(parseFloat((parseFloat(kValue) * 1000).toFixed(5).toString()).toString());
        }
      }
    }
  }, [kValue]);



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
  };

  return (
    <>
      <div className={styles.bodyOuterDiv}>
        <div className={styles.bodyInnerDiv}>
          <div >
            It's Austin7L {props.pageName} Page
          </div>
        </div>
        <div className={styles.unitConverBodyDiv} >
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
          <img src="/icons/broom_24px.png" className={styles.broom} onClick={() => { handleLengthBroomClick("length") }} />
        </div>
        <br />
        <div className={styles.unitConverBodyDiv} >
          <form >
            <label>重量換算</label>
            <br />
            <label>臺斤:
              <input type="text" value={tkgValue} onChange={handleInput}
                onClick={() => { setFoucusElement("tkg") }} />
            </label>
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
            <br />
          </form>
          <img src="/icons/broom_24px.png" className={styles.broom} onClick={() => { handleLengthBroomClick("weight") }} />
        </div>
      </div>
    </>
  );
};

export default UnitConvertBody;