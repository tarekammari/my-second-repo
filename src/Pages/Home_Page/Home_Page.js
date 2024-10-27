import Nav from "../Home_Page/Nav_Section/Nav";
import Main from "../Home_Page/Main_Section/Main";
import Menu from "../Home_Page/Menu_Section/Menu_Section";
import Testimonials from "../Home_Page/Testimonials_Section/Testimonials_Section";
import About from "../Home_Page/About_Section/About_Section";
import Footer from "../Home_Page/Footer_Section/Footer"; 

export default function Home () {
    return (
      <div className="Home">
        <Nav />
        <Main />
        <Menu />
        <Testimonials />
        <About />
        <Footer />
      </div>
    );
  };