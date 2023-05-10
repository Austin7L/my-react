import styles from "../../styles/Home.module.css";

const CssButtons = () => {
  return (
    <>
      <div style={{ height: "800px", display: "flex", margin: "auto" }}>
        <div className={styles.buttonDiv1} >
          <button className={styles.button1} />
        </div>
        <div className={styles.buttonDiv1} >
          <button className={styles.button2} />
        </div>
        <div className={styles.buttonDiv1} >
          <button className={styles.button3} />
        </div >
        <div className={styles.buttonDiv1} >
          <button className={styles.button4} />
        </div >
      </div >
    </>
  );
}

export default CssButtons;