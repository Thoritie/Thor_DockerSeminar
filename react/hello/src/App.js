import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.scss';
import './bulma.css';
import './hello.css';
import './hello.js';



var divStyle = {
  width: 500
};

var tech = {
  paddingTop: 20,
  width: 200
};

var tech1 = {
  width: 100
};



class App extends Component {
  render() {
    return (
    <div className="App">
      <section className="hero is-info is-large">
      <div className="hero-head">
         <header className="nav">
            <div className="container">
            </div>
         </header>
      </div>
        <div className="hero-body">
         <div className="container has-text-centered">
            
            <link href="https://fonts.googleapis.com/css?family=Black+Han+Sans|Fredoka+One|Press+Start+2P|Roboto+Mono|Martel" rel="stylesheet"/>
            {/* 
            <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
            */}
            <h1>Docker  is  &nbsp;
               <span
                  class="txt-rotate"
                  data-period="2000"
                  data-rotate='[ "nerdy.", "simple.", "fantastic.", "pretty.", "fun!" ]'></span>
            </h1>
            {/* 
            <h3>React  &lt;and&gt; Docker.</h3>
            */}
            <br/>
            <br/>
            <div className="columns">
               <div className="column"><img src="/dockerSe.png" style={divStyle}/> </div>
               <div className="column">
                  <div className="card">
                     <div className="card-content">
                     <span className="tag is-primary is-medium">Technology</span>
        
                        <p className="title" >
                        </p>
                        <div className="columns is-mobile">
                          <div className="column"><img src="/react.png" style={tech1}/> </div>
                          <div className="column"><img src="/bulma.png" style={tech}/> </div>
                        </div>
                     </div>
                     <footer className="card-footer">
                        <p className="card-footer-item">
                           <span>
                              docker seminar
                           </span>
                        </p>
                        <p className="card-footer-item">
                           <span>
                          Thohirah Husaini
                           </span>
                        </p>
                     </footer>
                  </div>
               </div>
            </div>
         </div>
        </div>
      </section>
    </div>
    );
  }
}

export default App;
