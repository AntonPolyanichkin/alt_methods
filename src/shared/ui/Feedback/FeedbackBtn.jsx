// import styles from "./styles/feedbackBtnStyles.module.scss";
// function Feedback({ text }) {
//   return <button className={styles.btn}>{text}</button>;
// }

// export default Feedback;

import styles from "./styles/feedbackBtnStyles.module.scss";

function Feedback({ text, size = "md", onClick, arrow = false}) {
  const btnMainClass = ()=> arrow ? "btn-arrow" : "btn"
  return (
    <button
      onClick={onClick}
      className={` ${styles[btnMainClass()]} ${styles[size]}`}
    >
      {text}
    </button>
  );
}

export default Feedback;

