import './App.css';
import Navbar from './scenes/navbar';
import AboutMe from './scenes/about-me';
import SkillSet from './scenes/skill-sets';
import Projects from './scenes/projects';
import WorkAndEducation from './scenes/work-education';

function App() {
  return (
    <div className='bg-black w-screen min-h-screen h-[2000px]'>
      <div className="flex flex-col box-border w-full gap-20 px-[20px] md:px-[15vw]">
        <Navbar/>
        {/* <Home /> */}
        <AboutMe />
        <SkillSet />
        <Projects />
        <WorkAndEducation />
      </div>
    </div>
  );
}

export default App;
