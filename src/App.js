import './App.css';
import { Header } from './components';
import { Home, Contact, Books, AboutUs } from './pages';
import { Routes, Route } from 'react-router-dom';
const App = () => {

  

  return(
      <div className="App">
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="books" element={<Books/>}/>
          <Route path="contactus" element={<Contact/>}/>
          <Route path="aboutus" element={<AboutUs/>}/>
        </Routes>
      </div>
  )
}

export default App;
