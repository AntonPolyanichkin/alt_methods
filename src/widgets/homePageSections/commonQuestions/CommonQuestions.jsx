import styles from "./styles/commonQuestionsStyles.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { useId } from "react";
import { useTranslation } from "react-i18next";

function CommonQuestions() {
  const { t } = useTranslation();
  const accordionId = useId();
  const questions = [
    "ropeAccessWhat",
    "ropeAccessSafe",
    "outsideEstonia",
    "mobilise",
    "quotationIncludes",
    "projectSize",
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles["faq-container"]}>
        <p className={styles.faqEyebrow}> {t("faq.eyebrow")}</p>
        <h2 className={styles.faqTitle}>{t("faq.title")}</h2>

        <div className={styles.faqList}>
          {questions.map((question, index) => {
            const summaryId = `${accordionId}-question-${index}`;
            const detailsId = `${accordionId}-answer-${index}`;

            return (
              <Accordion key={question}>
                <AccordionSummary expandIcon={<AddIcon />} aria-controls={detailsId} id={summaryId}>
                  <Typography className={styles.heading}>{t(`faq.questions.${question}`)}</Typography>
                </AccordionSummary>
                <AccordionDetails id={detailsId} aria-labelledby={summaryId}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CommonQuestions;
