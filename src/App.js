import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom';
import SignUpForm from './components/SignUpForm'
import Succeed from './components/Succeed'
import Welcome from './components/Welcome';
import { createGlobalStyle } from 'styled-components'
import Page from './pages/Page';
function App() {
 
  
  return (
    <div className='app'>
      <BrowserRouter>
      <Page />
      </BrowserRouter>
      <GlobalStyle/>
    </div>
  );
}
const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to right, #9795EF, #F9C5D1);
   @media(max-width: 1000px){
    background: linear-gradient(to right, #E8DBFC, #F8F9D2);
   }
  }`

export default App;
