import styles from "../../styles/Home.module.css";
import { useState, useEffect, useCallback } from "react";

const UnitConvertBody = (props: any) => {
  const [mmValue, setMMValue] = useState("");
  const [cmValue, setCMValue] = useState("");
  const [mValue, setMValue] = useState("");
  const [kmValue, setKMValue] = useState("");
  const [focusElement, setFoucusElement] = useState("");


  const handleMilliMeter = (e: any) => {
    setMMValue(e.target.value)
    setFoucusElement("mm");
  };

  const handleCenterMeter = (e: any) => {
    setCMValue(e.target.value)
    setFoucusElement(("cm"));
  };

  const handleMeter = (e: any) => {
    setMValue(e.target.value)
    setFoucusElement("m");
  };

  const handleKiloMeter = (e: any) => {
    setKMValue(e.target.value)
    setFoucusElement("km");
  };

  const handleBroomClick = () => {
    setMMValue("");
    setCMValue("");
    setMValue("");
    setKMValue("");
  }


  useEffect(() => {
    console.log("outEffect focusElement: " + focusElement)
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
        <div >
          It's Austin7L {props.pageName} Page
        </div>
        <div className={styles.unitConverBodyDiv}>
          <form>
            <label>長度/距離換算</label>
            <br />
            <label >毫米:
              <input id="mm" type="text" value={mmValue} onChange={handleMilliMeter}
                onClick={() => { return (setFoucusElement("mm"), handleMilliMeter) }} />
            </label>
            <label>公分:
              <input id="cm" type="text" value={cmValue} onChange={handleCenterMeter}
                onClick={() => { return (setFoucusElement("cm"), handleCenterMeter) }} />
            </label>
            <label>公尺:
              <input id="m" type="text" value={mValue} onChange={handleMeter}
                onClick={() => { return (setFoucusElement("m"), handleMeter) }} />
            </label>
            <label>公里:
              <input id="km" type="text" value={kmValue} onChange={handleKiloMeter}
                onClick={() => { return (setFoucusElement("km"), handleKiloMeter) }} />
            </label>
            <br />
          </form>
          <img className={styles.broom} onClick={handleBroomClick} />
        </div>
      </div>
    </>
  );
};

export default UnitConvertBody;