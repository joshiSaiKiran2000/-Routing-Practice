import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />

      <Route exact path="/Contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
