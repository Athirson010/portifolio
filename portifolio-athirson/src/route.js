import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import index from './pages/index'

export default function Routes(){
    return(
       <Router>
           <Switch>
               <Route exact path="*" component={index}/>
           </Switch>
       </Router>
    );
}