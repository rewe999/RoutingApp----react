import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom'

const Home = () => <h1>Strona Startowa</h1>
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>Kontakt</h1>
const ErrorPage = () => <h1>Strona nie istnieje</h1>

class App extends React.Component {
  render(){
    return (
      <Router>
    <div>
      <header>
        <nav>
          <ul>
            <li><NavLink exact to="/" activeClassName="home_selected">Start</NavLink></li>
            <li><NavLink to="/news" activeClassName="news_selected">Aktualności</NavLink></li>
            <li><NavLink to="/contact" activeClassName="contact_selected">Kontakt</NavLink></li>
          </ul>
        </nav>
      </header>
      <section>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/news" component={News}/>
        <Route path="/contact" component={Contact}/>
        <Route component={ErrorPage}/>
        </Switch>
      </section>
    </div>
    </Router>
  );
}
}

export default App;