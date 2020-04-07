import React from 'react';
import { About, Awards, Education, Experience, Interests, Nav, Skills} from './components/Layout'

function App() {
  return (
    <div className="container-fluid p-0">
      <Nav/>
      <About/>
      <hr className="m-0"/>
      <Experience/>  
      <hr className="m-0"/>
      <Education/>
      <hr className="m-0"/>
      <Skills/>
      <hr className="m-0"/>
      <Interests/>
      <hr className="m-0"/>
      <Awards/>
    </div>
  );
}

export default App;
