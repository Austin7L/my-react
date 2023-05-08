import Links from "@/componets/index/Links";
import Headers from "../componets/index/Headers";
import styles from "../styles/Home.module.css";
import Body from "@/componets/index/Body";
import Footer from "@/componets/index/Footer";

const Home = () => {
  return (
    <>
      <div className={styles.homeOuterDiv}>
        <div className={styles.headerDiv}>
          <Headers />
        </div>
        <div >
          <Body pageName="Home" />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;