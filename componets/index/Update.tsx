import styles from "@/styles/Home.module.css";

const logs = [
  {
    date: "2023/05/17 Wed.",
    info: [
      "修正list溢出問題。",
      "改用textArea Element。",
      "可重複完成/取消清單。",
      "增加update頁面。"]
  },
];

const log = logs.map((log) => {

});

const Update = (props: any) => {
  return (
    <>
      <div >
        <div className={styles.bodyOuterDiv} >
          {logs.map((log, index) => {
            return (
              <ul key={index} style={{ marginBottom: "5px", borderBottom: "1px solid darkgray", paddingBottom: "5px" }}>
                {log.date}
                {log.info.map((info, index) => {
                  return (
                    <li key={index}>{info}</li>
                  )
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Update;