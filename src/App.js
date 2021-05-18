import React, {Fragment} from 'react'
import Header from './components/Header.js'
import  Personajes from './components/Personajes.js'
import './main.sass'
import './components/Header.css'



const App = () => {
    return (
           <Fragment>
               <Header
                  title = "Ricardo y Mortimer"
               />
               <Personajes></Personajes>
           </Fragment>
      );
}

export default App;