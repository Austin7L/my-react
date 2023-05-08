import styles from "../../styles/Home.module.css";
import { useState } from "react";

const UnitConvertBody = (props: any) => {
  const [milliMeter, setMilliMeter] = useState(0);
  const [centerMetre, setCenterMeter] = useState(0);
  const [meter, setMeter] = useState(0);
  const [kiloMeter, setKiloMeter] = useState(0);

  const handleMilliMeter = (e: any) => {
    setMilliMeter(e.target.values)
    console.log("MM: " + e.target.value)
  };

  const handleCenterMeter = (e: any) => {
    setCenterMeter(e.target.values)
    console.log("CM: " + e.target.value)
  };

  const handleMeter = (e: any) => {
    setMeter(e.target.values)
    console.log("M: " + e.target.value)
  };

  const handleKiloMeter = (e: any) => {
    setKiloMeter(e.target.values)
    console.log("M: " + e.target.value)
  };

  return (
    <>
      <div className={styles.bodyOuterDiv}>
        <div >
          It's Austin7L {props.pageName} Page
        </div>
        <div className={styles.unitConverBodyDiv}>
          <form  >
            <label>長度&距離換算</label>
            <br />
            <label>毫米: </label>
            <input type="text" onChange={handleMilliMeter} />
            <label>公分: </label>
            <input type="text" onChange={handleCenterMeter} />
            <label>公尺: </label>
            <input type="text" onChange={handleMeter} />
            <label>公里: </label>
            <input type="text" onChange={handleKiloMeter} />
            <br />
          </form>
          <a className={styles.broom} />
        </div>
      </div>
    </>
  );
};

export default UnitConvertBody;