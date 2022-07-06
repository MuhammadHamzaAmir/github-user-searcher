import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import NavBar from  "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import { GithubProvider } from './context/github/GithubContext';


function App() {
    return (
        <GithubProvider>
            <Router>
                <div className="flex flex-col justify-between h-screen">
                    <NavBar />
                    
                    <main className="container mx-auto pb-12 px-3">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/notfound" element={<NotFound />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </main>
                    
                    <Footer />
                    
                </div>
            </Router>
        </GithubProvider>
    );
}

export default App;
