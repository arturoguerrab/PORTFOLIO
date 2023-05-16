import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css'
import HeroIndexContainer from './components/Body/HeroIndexContainer';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HeroIndexContainer/>}/>
          <Route path="/about" element={<div>RUTA about</div>}/>
          <Route path="/projects" element={<div>RUTA projects</div>}/>
          <Route path="/contact" element={<div>RUTA contact</div>}/>
          <Route path="*" element={<div>404</div>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
