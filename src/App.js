import  React, {useState, useEffect, createContext} from "react"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
//importing components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import All from "./components/All"
import Today from "./components/Today"
import Important from './components/Important'
import Week from "./components/Week"
import ProjectView from "./components/ProjectView"

export const ProjectContext = createContext();

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [projectList, setProjectList] = useState([]);

  // useEffect(() => {
  //  setShowSidebar(false)
  // }, [])

  useEffect(() => {
    console.log(projectList)
  }, [projectList])

  return (
    <div className="App">
      <ProjectContext.Provider value={projectList}>

        <Header setShowSidebar={setShowSidebar} />
        <div className="container">
          {
          showSidebar && <Sidebar setProjectList={setProjectList} projList={projectList}/> 
          }
          <Routes>
            <Route path="/all" element={<All projectList={projectList}/>}/>
            <Route path="/today" element={<Today projectList={projectList}/>}/>
            <Route path="/week" element={<Week projectList={projectList}/>}/>
            <Route path="/important" element={<Important projectList={projectList}/>}/>
            {
              projectList.map((proj, i) => {
                return  <Route key={i} path={`/${proj.name}`} element={<ProjectView project={proj} setProjectList={setProjectList} projectList={projectList}/>} />
                        
              })
            }
          </Routes>
        </div>

      </ProjectContext.Provider>
    </div>
  );
}

export default App;
