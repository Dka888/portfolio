import "./styles.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Awards from "./components/Awards";


export function App() {
  return (
    <div id="page-top">
      <Navigation />
      <div className="container-fluid p-0">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Awards />
      </div>
    </div>
  );
}

export default App;
