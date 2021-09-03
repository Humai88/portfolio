import React from "react";
import { Work } from "./Work";
import styles from "./WorksSection.module.scss";
import todo from "./../../assets/img/2021-09-03 18_52_24-Todolist.jpg";
import blog from "./../../assets/img/2021-09-03 19_02_11-on-les.jpg";
import social from "./../../assets/img/2021-09-03 18_56_57-Grem.jpg";
import { Fade } from "react-awesome-reveal";

export const WorksSection = () => {
  return (
    <div id="works" className={styles.wrapper}>
      <h2>Projects</h2>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <Fade duration={2000}>
          <Work
            title="Social Network"
            text="A social network website I built using React (functional components, Hooks), Redux (Redux Thunk), React-Redux, REST Api (fetching, displaying and posting data), Axios, Formik, Yup and Typescript. "
            imgSrc={social}
            ghLink="https://github.com/Humai88/socialnetwork"
            webLink="http://Humai88.github.io/socialnetwork"
          />
          <Work
            title="Todolist"
            text="A website for creating a tasks-list. I implemented there React (functional components, Hooks), Redux (Redux Thunk), REST Api (fetching, displaying and posting data), Axios, SASS, Material UI "
            imgSrc={todo}
            ghLink="https://github.com/Humai88/todolist"
            webLink="https://humai88.github.io/todolist/"
          />
          <Work
            title="Blog"
            text="A primary school teacher's blog (Standalone server) that I first built using vanilla JS but after a while migrated it to React. I implemented CSS Modules approach and SASS for styling. For displaying data I used fetching data from a local JSON."
            imgSrc={blog}
            ghLink="https://github.com/Humai88/on-les"
            webLink="https://www.on-les.com/"
          />
        </Fade>
      </div>
    </div>
  );
};
