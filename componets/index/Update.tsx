import styles from "@/styles/Home.module.css";

const logs = [
  {
    date: "Update List On 2023/05/23 Tue.",
    info: [
      "增加browser 資料儲存。",
    ]
  },
  {
    date: "Update List On 2023/05/19 Fri.",
    info: [
      "單位換算自動計算方式優化。",
      "單位轉換小數位限制五位。",
    ]
  },
  {
    date: "Update List On 2023/05/18 Thu.",
    info: [
      "單位換算清除按鈕綁定修正。",
      "限制不允許輸入非數值字元。",
    ]
  },
  {
    date: "Update List On 2023/05/17 Wed.",
    info: [
      "修正list溢出問題。",
      "改用textArea Element。",
      "可重複完成/取消清單。",
      "增加update頁面。"
    ]
  },
];

const Update = (props: any) => {
  return (
    <>
      <div >
        <div className={styles.bodyOuterDiv} >
          {logs.map((log, index) => {
            return (
              <ul key={index} style={{ marginBottom: "1rem", borderBottom: "1px solid darkgray", paddingBottom: "5px" }}>
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