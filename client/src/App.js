import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/CoffeePlace' element={<Project3 />} />
        <Route path='/TicTacToe' element={<Project1 />} />
        <Route path='/BlackJack' element={<Project2 />} />
      </Routes>
      <div className='footer'>
        <a href='https://github.com/jascolil01'>
          <img className='footerNavLink' alt='' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />
        </a>
        <a href='https://www.linkedin.com/in/joshuaascolillo/'>
          <img className='footerNavLink' alt='' src='https://static.vecteezy.com/system/resources/thumbnails/003/692/704/small/linkedin-american-business-logo-social-media-icon-black-pictogram-illustration-isolated-on-white-backgroud-free-vector.jpg' />
        </a>
        <a href='mailto:jayasco246@gmail.com'>
          <img className='footerNavLink' alt='mailimage' src='https://www.pngkey.com/png/detail/15-154826_png-file-email-icon-vector-circle.png' />
        </a>
      </div>
    </div>
  );
}

export default App;
