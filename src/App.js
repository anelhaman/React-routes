import React, { Component } from 'react';
import Routes from './routes'
import Header from './components/Header/Header'
import MobileHeader from './components/MobileHeader/MobileHeader'
import Footer from './components/Footer/Footer'

import './styles/foundation.min.css'
import './styles/style.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      appName : "Store Management"
    }
  }
  render() {
    return (
      <div className="off-canvas-wrapper">
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

        <div className="off-canvas-content" data-off-canvas-content>
          <MobileHeader name={this.state.appName}/>
          <Header name={this.state.appName}/>
          <Routes/>
          <hr />

          <Footer/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
