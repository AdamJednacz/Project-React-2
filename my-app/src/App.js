import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Loading from "./components/Loading";
const Main = lazy(() => import("./components/Main"));
const Layout = lazy(() => import("./components/Layout"));
const Rental = lazy(() => import("./components/Rental"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Opinions = lazy(() => import("./components/Opinions"));
const Form = lazy(() => import("./components/Form"));
const Garage = lazy(() => import("./components/Garage"));
function App() {
  return (
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path='/' element={<Layout/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path='/rental' element={<Rental/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/opinions' element={<Opinions/>}/>
            <Route path='/contact' element={<Form/>}/>
            <Route path='/garage' element={<Garage/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
