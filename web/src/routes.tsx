import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import Form from './pages/Form'
import Consult from './pages/Consult'
import Sucess from './pages/Sucess'

function Routes(){
  return (
      <BrowserRouter>
          <Route path="/" component={Landing} exact/>
          <Route path="/form" component={Form}/>
          <Route path="/consult" component={Consult}/>
          <Route path="/sucess" component={Sucess}/> 
      </BrowserRouter>
  )
}

export default Routes;