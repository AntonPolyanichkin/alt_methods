import styles from "./styles/feedbackBtnStyles.module.scss";
function Feedback({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

export default Feedback;
