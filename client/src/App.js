
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import electronics from '../src/assets/image/electronics.png';
import fashion from '../src/assets/image/fashion.png';
import sports from '../src/assets/image/sports.png';
import health from '../src/assets/image/health.png';
import stationary from '../src/assets/image/stationary.png';
import automotive from '../src/assets/image/automotive.png';







import Navbar from './Component/Navbar/Navbar';
import Scroller from './Component/Scroller/Scroller';
import  Carousel  from './Component/Carousel/Carousel'
import TopProducts from './Component/top Products/top_products';
import  TopSmartPhones from './Component/top_delas_on_smart_phones/top_products';
import  TopBrands from './Component/Featured Brands/top_products';
import Footer from './Component/Footer/Fotter';




//pages
import   Electronics_page from './pages/electronics_page/electronics'




function App() {

  const images = [

    electronics,fashion,sports,automotive,stationary
    
  ];



  return (
    <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Scroller />
                            <Carousel images={images} />
                            <TopProducts />
                            <TopSmartPhones />
                            <TopBrands />
                        </>
                    } />
                    <Route path="/electronics" element={< Electronics_page />} />
                </Routes>
                <Footer />
            </div>
        </Router>
  );
}

export default App;
