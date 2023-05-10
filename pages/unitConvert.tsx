import UnitConvertBody from "@/componets/index/UnitConvertBody";
import Headers from "../componets/index/Headers";
import styles from "../styles/Home.module.css";
import Home from "./home";
import Footer from "@/componets/index/Footer";

const unitContert = () => {
  return (
    <>
      <div className={styles.homeOuterDiv}>
        <div className={styles.headerDiv}>
          <Headers />
          <UnitConvertBody pageName="unitConvert" />
          <Footer />
        </div>
      </div >
    </>
  );
};

export default unitContert;