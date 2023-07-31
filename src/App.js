import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import Spinner from './Components/Spinner';
 class App extends Component {
  render() {
      return (
          <div>
           <Navbar />
       {/* {this.state.loading && <Spinner />} */}
           <News />

          </div>
      )
  }
}
export default App;
