import React from 'react';
import '../styles/App.css';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Page from './Page'
import Footer from './Footer'

class App extends React.Component {
  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <header>
          <Header/>
        </header>

        <main>
          <aside>
            {<Navigation />}
          </aside>

          <section className="page">
            {<Page />}
          </section>
        </main>

        <footer>
          {<Footer />}
        </footer>
      </div>
      </Router>
  );
}
}

export default App;
