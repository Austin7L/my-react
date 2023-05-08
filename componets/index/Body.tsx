import styles from "../../styles/Home.module.css";
import unitConver from "./Footer";

const Body = (props: any) => {
  return (
    <>
      <div className={styles.bodyOuterDiv}>
        <div >
          It's Austin7L {props.pageName} Page
        </div>
      </div>
    </>
  );
};

export default Body;