import { useTranslation } from "react-i18next";
import styles from "./styles/portfolioFiltersStyles.module.scss";

function PortfolioFilters({ categories, activeCategory, onChange }) {
  const { t } = useTranslation();

  return (
    <div className={styles.filters} role="group" aria-label={t("portfolioPage.filtersLabel")}>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`${styles.filterBtn} ${activeCategory === category ? styles.filterBtnActive : ""}`}
          onClick={() => onChange(category)}
          aria-pressed={activeCategory === category}
        >
          {t(`portfolioPage.categories.${category}`)}
        </button>
      ))}
    </div>
  );
}

export default PortfolioFilters;
