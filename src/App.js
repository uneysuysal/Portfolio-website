
import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/pages/home';
import About from './component/pages/about'
import Project from './component/pages/project';
import Blogs from './component/pages/blogs';
import Contact from './component/pages/contact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Blogd from './component/pages/blogd';
import Navbars from './component/navbar/navbar';



function App() {
  return (
    
    <Router>
      <Navbars />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/project' component={Project} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/details/:id' component={Blogd} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}
  
export default App;
