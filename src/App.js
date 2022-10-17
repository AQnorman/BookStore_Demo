import './App.css';
import { Header } from './components';
import { Contact, Books, AboutUs, BookDetail } from './pages';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="books/:id" element={<BookDetail />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default App;
