import logo from './logo.svg';
import 'my-web-app/App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./home"

function App(){
    return(
        <Router>
            <Routes>
                <Route path = "/" exct Component = {Home}/>
            </Routes>
        </Router>
    );
}

export default App;