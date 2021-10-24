
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//pages 
import About from './pages/About';

import Article from './pages/Article';
import NoMatch from './pages/NoMatch';


//components
import NavBar from './components/NavBar';
import ArticleList from './pages/ArticleList';

function App() {
  return (
  <Router>
    <NavBar/>
  
      
    <div className=" max-w-screen-md mx-auto pt-20">
    <Switch>
     <Route  path="/home">
      <Home />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/about">
       <About />
      </Route>
     
      <Route exact path='/article/:name'>
      <Article />
      </Route>
      <Route  path="/articles-list">
      <ArticleList />
      </Route>
      <Route path="*">
        <NoMatch />
        </Route>
         </Switch>
      </div>
     
     
      </Router>
    
    
    
  );
}

export default App;
