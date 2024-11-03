import Nav  from './Pages/Home_Page/Nav_Section/Nav';
import Main from './Pages/Home_Page/Main_Section/Main';
import Menu_Section from './Pages/Home_Page/Menu_Section/Menu_Section';
import Testimonials from './Pages/Home_Page/Testimonials_Section/Testimonials_Section';
import About from './Pages/Home_Page/About_Section/About_Section';
import Footer from './Pages/Home_Page/Footer_Section/Footer';
import "./App.css"
import { header } from "react"



function App() {
  return (
    <div className="App">
          <Nav show={true} />
          <Main />
          <Menu_Section />
          <Testimonials />
          <About />
          <Footer />
    </div>
  );
}

export default App;
