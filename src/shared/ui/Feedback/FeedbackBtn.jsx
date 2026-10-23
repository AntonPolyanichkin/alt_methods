

import styles from "./styles/feedbackBtnStyles.module.scss";

function FeedbackBtn({ text, size = "md", onClick, arrow = false}) {
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

export default FeedbackBtn;

