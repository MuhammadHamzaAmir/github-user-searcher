import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from  "./components/layout/NavBar"
import Footer from "./components/layout/Footer"

function App() {
    return (
        <Router>
            <div className="flex flex-col justify-between h-screen">
                <NavBar />
                
                <main className="container mx-auto pb-12 px-3">Content</main>
                
                <Footer />
                
            </div>
        </Router>
    );
}

export default App;
