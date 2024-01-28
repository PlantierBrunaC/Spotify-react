import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import React from 'react';
import Main from './Main/Main';
import Footer from './Footer/Footer'; 

function App() {
  return (
<React.Fragment>
  <Header></Header>
  <Sidebar />
<Main />

<Footer></Footer>
</React.Fragment>



    
  );
}

export default App;
