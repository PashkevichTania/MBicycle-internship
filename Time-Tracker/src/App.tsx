import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {APP_PATH} from "./Constants";
import Tracker from "./Components/Tracker/Tracker";
import List from "./Components/List/List";
import Header from "./Components/Header/Header";
import ProjectsProvider from "./Components/Provider/projectsProvider";

function App() {


    return (
        <ProjectsProvider>
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route exact path={APP_PATH.TRACKER} component={Tracker}/>
                        <Route path={APP_PATH.LIST} component={List}/>
                    </Switch>
                </div>
            </Router>
        </ProjectsProvider>
    )
}

export default App
