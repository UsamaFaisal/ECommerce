import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './components/store';
import Home from './Pages/Home';
function App() {
  return (
    // <Provider store={store}>
    <Router>
      <Routes>
         <Route exact path="/" element={<Home/>}  />
      </Routes>
      </Router>
      // </Provider>
  );
}

export default App;