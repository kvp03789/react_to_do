import  React, {useState, useEffect} from "react"
//importing components
import ToDoList from './components/ToDoList'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const App = () => {
  const [showSidebar, setShowSidebar] = useState();
  const [projectList, setProjectList] = useState();

  useEffect(() => {
   setShowSidebar(false)
  }, [])

  return (
    <div className="App">
      <Header setShowSidebar={setShowSidebar} />
      {showSidebar && <Sidebar projectList={projectList}/>}
      <ToDoList/>
    </div>
  );
}

export default App;
