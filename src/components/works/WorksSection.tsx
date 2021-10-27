import React from "react";
import { Work } from "./Work";
import styles from "./WorksSection.module.scss";
import todo from "./../../assets/img/2021-09-03-18_52_24-Todolist.webp";
import blog from "./../../assets/img/2021-09-15-11_25_49-on-les.webp";
import social from "./../../assets/img/2021-09-03-23_48_32-Grem.webp";
import weather from "./../../assets/img/2021-10-17-19_04_17-React-App.webp";
import anki from "./../../assets/img/2021-10-06-21_25_48-React-App.webp";
import reading from "./../../assets/img/reading.webp";
import { Fade } from "react-awesome-reveal";

export const WorksSection = () => {
  return (
    <div id="works" className={styles.wrapper}>
      <h2>Projects</h2>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <Fade duration={2000}>
          <Work
            title="Todolist"
            text="A website for creating a tasks-list. I implemented there React (functional components, Hooks), Redux (Redux Thunk), REST Api (fetching, displaying and posting data),TypeScript, Axios, SASS, Storybook and Material UI. "
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
          <Work
            title="Weather App"
            text="A site that shows current weather conditions and 5-day weather forecast. I built it using React, TypeScript, REST Api (fetching, displaying and posting data) and Axios."
            imgSrc={weather}
            ghLink="https://github.com/Humai88/weather-app"
            webLink="https://humai88.github.io/weather-app/"
          />
        </Fade>
      </div>
      <div className={styles.container} style={{ marginTop: "-2rem" }}>
        <Fade duration={2000}>
          <Work
            title="Anki Cards"
            text="A website for study of selected subject via flashcards. I built it using React (functional components, Hooks), Redux (Redux Thunk), React-Redux, REST Api (fetching, displaying and posting data), TypeScript, Axios, and Typescript. "
            imgSrc={anki}
            ghLink="https://humai88.github.io/reading-trainer/"
            webLink="https://humai88.github.io/friday"
          />
          <Work
            title="Reading Simulator"
            text="A small project I created using React and TypeScript. This programme allows to train children's reading skills. You can make words from letters, also you can add some notes/marks as it has a drawing mode. For PC screens only (not for mobiles/touch screens)"
            imgSrc={reading}
            ghLink="https://github.com/Humai88/reading-trainer"
            webLink="https://humai88.github.io/reading-trainer/"
          />
          <Work
            title="Social Network"
            text="A social network website I built using React (functional components, Hooks), Redux (Redux Thunk), React-Redux, REST Api (fetching, displaying and posting data), TypeScript, Axios, Formik, Yup and Typescript. "
            imgSrc={social}
            ghLink="https://github.com/Humai88/socialnetwork"
            webLink="http://Humai88.github.io/socialnetwork"
          />
        </Fade>
      </div>
    </div>
  );
};
