import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import SubscribeTest from "./Components/Subscribe/SubscribeTest";
import Main from "./Components/Main/Main";
import ResourceHub from "./Components/ResourceHub/ResourceHub";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <div className='MainAside'>
        <News />
        <SubscribeTest />
      </div>
      <Main />
      <ResourceHub />
      <Footer />
    </div>
  );
}

export default App;