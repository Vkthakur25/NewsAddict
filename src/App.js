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
          <Route exact path="/General" element={<News  key="General" category="general" />} />
          <Route exact path="/World" element={<News key="World" category="world" />} />
          <Route exact path="/Bussiness" element={<News key="Bussiness" category="business" />} />
          <Route exact path="/Technology" element={<News key="Technology" category="technology" />} />
          <Route exact path="/Entertainment" element={<News key="Entertainment" category="entertainment" />} />
          <Route exact path="/Sports" element={<News key="Sports" category="sports" />} />
          <Route exact path="/Science" element={<News key="Science" category="science" />} />
          <Route exact path="/Health" element={<News key="Health" category="health" />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
