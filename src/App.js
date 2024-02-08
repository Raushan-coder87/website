import { BrowserRouter as Router ,Route ,Routes } from "react-router-dom";
import Home from "./componet/Home";
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import Contact from "./componet/Contact";

import "./style/App.scss";
import "./style/header.scss";
// import "./style/colors.scss"
import "./style/home.scss";
import "./style/footer.scss";
import "./style/contact.scss";
function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>

    </Router>
   
    
  );
}

export default App;
