import React, { Component } from 'react';
import './Signup.css'
class Signup extends Component {
  render() {
    return (  
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column bodyPart">
          <h2>Signup Page</h2>
          <a href="/login" className="button">Login</a>
        </div>
      </div>
    );
  }
}

export default Signup
