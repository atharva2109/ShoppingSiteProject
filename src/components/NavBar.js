import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import '../css/mystyle.css'
import forgotPassword from './forgotPassword'
import FruitComponent from './FruitComponent'
import HomePage from './HomePage'
import DairyComponent from './DairyComponent'
export default function NavBar() {
   
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                
           
            <Link to='/' className='btn btn-outline-success' id='id7'>Home</Link>
     
      
      
      <Link to='/login' className='btn btn-outline-success' id='id4'>Login</Link>

      <Link to='/register' className='btn btn-outline-success' id='id5'>Register</Link>
             
            </nav>
          
            <Switch>
                <Route exact path='/' component={HomePage}/>
                 <Route path='/login' component={Login}/>
                 <Route path='/register' component={Register}/>
                 <Route path='/forgot' component={forgotPassword}/>
                 <Route path='/fruits' component={FruitComponent}/>
                 <Route path='/dairy' component={DairyComponent}/>
             </Switch>
             
        </div>
    )
}
