import styles from "./App.module.scss";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";
import { SkillsSection } from "./components/skills/SkillsSection";
import { WorksSection } from "./components/works/WorksSection";
import { RemoteJob } from "./components/remote/RemoteJob";
import { Contacts } from "./components/contacts/Contacts";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Main />
        <SkillsSection />
        <WorksSection />
        <RemoteJob />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
