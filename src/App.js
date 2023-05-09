import  React, {useState, useEffect, createContext} from "react"
//importing components
import ToDoList from './components/ToDoList'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export const ProjectContext = createContext();

const App = () => {
  const [showSidebar, setShowSidebar] = useState();
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
   setShowSidebar(false)
  }, [])

  return (
    <div className="App">
      <ProjectContext.Provider value={projectList}>

        <Header setShowSidebar={setShowSidebar} />
        {showSidebar && <Sidebar setProjectList={setProjectList}/> }
        <ToDoList/>

      </ProjectContext.Provider>
    </div>
  );
}

export default App;
