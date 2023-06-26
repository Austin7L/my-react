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
          setCMValue(numberFixed((parseFloat(mmValue) / 10)));
          setMValue(numberFixed((parseFloat(mmValue) / 1000)));
          setKMValue(numberFixed((parseFloat(mmValue) / 1000000)));
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
          setMMValue(numberFixed((parseFloat(cmValue) * 10)));
          setMValue(numberFixed((parseFloat(cmValue) / 100)));
          setKMValue(numberFixed((parseFloat(cmValue) / 1000)));
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
          setMMValue(numberFixed((parseFloat(mValue) * 1000)));
          setCMValue(numberFixed((parseFloat(mValue) * 100)));
          setKMValue(numberFixed((parseFloat(mValue) / 1000)));
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
          setMMValue(numberFixed((parseFloat(kmValue) * 1000000)));
          setCMValue(numberFixed((parseFloat(kmValue) * 100000)));
          setMValue(numberFixed((parseFloat(kmValue) * 1000)));
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
          setGValue(numberFixed((parseFloat(tkgValue) * 600)));
          setKGValue(numberFixed((parseFloat(tkgValue) * (600 / 1000))));
          setKValue(numberFixed((parseFloat(tkgValue) * (600 / 1000000))));
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
          setTKGValue(numberFixed((parseFloat(gValue) / 600)));
          setKGValue(numberFixed((parseFloat(gValue) / 1000)));
          setKValue(numberFixed((parseFloat(gValue) / 1000000)));
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
          setTKGValue(numberFixed((parseFloat(kgValue) * (1000 / 600)), 2));
          setGValue(numberFixed((parseFloat(kgValue) * 1000)));
          setKValue(numberFixed((parseFloat(kgValue) / 1000)));
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
          setTKGValue(numberFixed((parseFloat(kValue) * (1000000 / 600))));
          setGValue(numberFixed((parseFloat(kValue) * 1000000)));
          setKGValue(numberFixed((parseFloat(kValue) * 1000)));
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

  const numberFixed = (value: number, fractionDigits: number = 5) => {
    return parseFloat(value.toFixed(fractionDigits)).toString();
  }

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
                onFocus={() => { setFoucusElement("mm") }} />
            </label>
            <label>公分:
              <input type="text" value={cmValue} onChange={handleInput}
                onFocus={() => { setFoucusElement("cm") }} />
            </label>
            <label>公尺:
              <input type="text" value={mValue} onChange={handleInput}
                onFocus={() => { setFoucusElement("m") }} />
            </label>
            <label>公里:
              <input type="text" value={kmValue} onChange={handleInput}
                onFocus={() => { setFoucusElement("km") }} />
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
                onFocus={() => { setFoucusElement("tkg") }} />
            </label>
            <label >克:
              <input type="text" value={gValue} onChange={handleInput}
                onFocus={() => { setFoucusElement("g") }} />
            </label>
            <label>公斤:
              <input type="text" value={kgValue} onChange={handleInput}
                onFocus={() => { setFoucusElement("kg") }} />
            </label>
            <label>公噸:
              <input type="text" value={kValue} onChange={handleInput}
                onFocus={() => { setFoucusElement("k") }} />
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