import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {APP_PATH} from "Constants";
import Tracker from "components/Tracker/Tracker";
import ProjectsList from "components/Projects/ProjectsList";
import Header from "components/Header/Header";
import ProjectsProvider from "components/Context/projectsProvider";
import ProjectDetails from "components/Projects/ProjectDetails";

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

export default App;
