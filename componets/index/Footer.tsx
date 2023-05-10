import { useCallback, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import useRWD from "@/hooks/useRWD";


const Footer = () => {
  const device = useRWD();

  if (device === "PC") {
    return (
      <div className={styles.footerOuterDiv}>
        Copyright © 2023 Austin7L Inc. All rights reserved.
      </div>);
  } else if (device === "tablet") {
    return (
      <div className={styles.footerOuterDiv}>
        Copyright © 2023 Austin7L Inc. All rights reserved.
      </div>
    );
  } else {
    return (
      <div className={styles.footerOuterDiv}>
        Copyright © 2023 Austin7L Inc.
      </div>
    );
  }
};

export default Footer;