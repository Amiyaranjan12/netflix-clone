import React from 'react';
import './style/App.css';
import requests from './requestapi';
import Row from './componets/Row';
import Banner from './componets/Banner'
import Navbar from './componets/Navbar'

function App() {
  return (
    <div className="App">

     <Navbar/>

     <Banner/>

     <Row title="Netflix Original" fetchAdress={requests.getNetflixOriginal} isLargeRow/>
     <Row title="Trending Now" fetchAdress={requests.getTrading}/>
     <Row title="Top Rated" fetchAdress={requests.getTopRaated}/>
     <Row title="Action Movies" fetchAdress={requests.getNetflixOriginal}/>
     <Row title="Comedy Movies" fetchAdress={requests.getActionMovie}/>
     <Row title="Horror Movies" fetchAdress={requests.getHorrorMovie}/>
     <Row title="Romance Movies" fetchAdress={requests.getRomanceMovie}/>
     <Row title="Documentaries" fetchAdress={requests.getDocumentryMovie}/>
    

    </div>
  );
}

export default App;
