import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Spinner from './Components/Spinner';
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* {this.state.loading && <Spinner />} */}
        <Routes>
          <Route element={<News />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
