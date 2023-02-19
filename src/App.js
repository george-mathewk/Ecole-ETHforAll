import './App.css';
import React from 'react'
import Routers from './routes/Routers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Create from './pages/Create';


function App() {
    return (
        <>
            <Header />
            <Routers />
            <Footer />
        </>

    );
}

export default App;
