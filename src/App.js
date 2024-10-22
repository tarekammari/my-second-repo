import Nav  from './Pages/Home_Page/Nav_Section/Nav';
import Main from './Pages/Home_Page/Main_Section/Main';
import Menu_Section from './Pages/Home_Page/Menu_Section/Menu_Section';
import Testimonials from './Pages/Home_Page/Testimonials_Section/Testimonials_Section';
import "./App.css"
import { header } from "react"



function App() {
  return (
    <div className="App">
      <header>
          <Nav />
          <Main />
          <Menu_Section />
          <Testimonials />
      </header>
      
    </div>
  );
}

export default App;
