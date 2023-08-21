import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';
import AddVideo from './pages/AddVideo';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header/>
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addVideo' element={<AddVideo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
