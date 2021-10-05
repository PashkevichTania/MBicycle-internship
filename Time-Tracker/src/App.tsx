import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {APP_PATH} from "./Constants";
import Tracker from "./Components/Tracker/Tracker";
import ProjectsList from "./Components/Projects/ProjectsList";
import Header from "./Components/Header/Header";
import ProjectsProvider from "./Components/Context/projectsProvider";
import ProjectDetails from "./Components/Projects/ProjectDetails";

function App() {


    return (
        <ProjectsProvider>
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route exact path={APP_PATH.TRACKER} component={Tracker} />
                        <Route path={APP_PATH.PROJECTS_LIST} component={ProjectsList} />
                        <Route path={APP_PATH.PROJECT} component={ProjectDetails} />
                    </Switch>
                </div>
            </Router>
        </ProjectsProvider>
    )
}

export default App
