import styles from "../../styles/Home.module.css";

const Links = () => {
  let links = [
    { "label": "Home", "pageName": "home", "icons": "/icons/home.png" },
    { "label": "CSS", "pageName": "css", "icons": "/icons/css3.png" },
    { "label": "Unit conversion", "pageName": "unitConvert", "icons": "/icons/calculator.png" },
    { "label": "Todo List", "pageName": "todoList", "icons": "/icons/todo-list.png" },
    { "label": "Log", "pageName": "update", "icons": "/icons/update_16px.png" },
  ];

  return (
    <>
      <div className={styles.linkOuterDiv}>
        {links.map((link, index) => {
          return (
            <a key={index} className={styles.linksA} href={"/" + link.pageName} >
              <div className={styles.headerIcons}
                style={{ backgroundImage: `url(${link.icons})` }}>
              </div>
            </a>
          )
        })}
      </div >
    </>
  )
}

export default Links;