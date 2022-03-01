import 'swiper/swiper.min.css';
import React from "react";
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './css/style.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Routs from './config/Routes'
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route 
          // element = {
          //   // props => (
          //     <>
          //       <Header />
          //       <Routs />
          //       <Footer />
          //     </>
          //   // )
          // }
          // render={ props => (
          //   <>
          //     <Header {...props} />
          //     <Routs />
          //     <Footer />
          //   </>
          // ) } 
        /> */}

            <Route path='/:category/search/:keyword' element={<Catalog />} />
            <Route path='/:category/:id' element={<Detail />} />
            <Route path='/:category' element={<Catalog />} />
            <Route path='/' exact element={<Home />} />

          {/* <Routs />
        </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
