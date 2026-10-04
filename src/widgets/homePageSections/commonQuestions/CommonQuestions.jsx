import styles from "./styles/commonQuestionsStyles.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function CommonQuestions() {
  const { t } = useTranslation();

  return (
    <section className={styles.faqSection}>
      <div className={styles["faq-container"]}>
        <p className={styles.faqEyebrow}> {t("faq.eyebrow")}</p>
        <h2 className={styles.faqTitle}>{t("faq.title")}</h2>

        <div className={styles.faqList}>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={styles.heading}>{t("faq.questions.ropeAccessWhat")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={styles.heading}>{t("faq.questions.ropeAccessSafe")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={styles.heading}>{t("faq.questions.outsideEstonia")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={styles.heading}>{t("faq.questions.mobilise")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={styles.heading}>{t("faq.questions.quotationIncludes")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={styles.heading}>{t("faq.questions.projectSize")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default CommonQuestions;
