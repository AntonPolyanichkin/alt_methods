import styles from "./styles/commonQuestionsStyles.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

function CommonQuestions() {
  return (
    <section className={styles.faqSection}>
      <div className={styles["faq-container"]}>
        <p className={styles.faqEyebrow}>FAQ</p>
        <h2 className={styles.faqTitle}>Common Questions</h2>

        <div className={styles.faqList}>
          <Accordion>
            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={styles.heading}>What is rope access, and when is it used?</Typography>
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
              <Typography className={styles.heading}>Is rope access safe?</Typography>
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
              <Typography className={styles.heading}>Do you work outside Estonia?</Typography>
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
              <Typography className={styles.heading}>How quickly can you mobilise?</Typography>
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
              <Typography className={styles.heading}>What does the quotation include?</Typography>
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
              <Typography className={styles.heading}>What size projects do you take on?</Typography>
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
