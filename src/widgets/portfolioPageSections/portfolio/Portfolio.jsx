import { useState } from "react";

import { servicesList } from "../../../app/constData/servicesList";
import styles from "./styles/portfolioStyles.module.scss";
import PortfolioFilters from "../portfolioFilters/PortfolioFilters";
import PortfolioHero from "../portfolioHero/PortfolioHero";
import ProjectCard from "./projectCard/ProjectCard";

const CATEGORIES = ["all", "facade", "roof", "sealing", "painting", "structure"];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" ? servicesList : servicesList.filter((p) => p.category === activeCategory);

  return (
    <>
      <PortfolioHero />
      <section className={styles.portfolioSection}>
        <div className={styles["portfolio-container"]}>
          <PortfolioFilters categories={CATEGORIES} activeCategory={activeCategory} onChange={setActiveCategory} />
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
