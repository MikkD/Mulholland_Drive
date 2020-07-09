import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Main from './components/Main/Main';
import ProductTemplate from './components/ProductTemplate/ProductTemplate'
import ShoppingBag from './components/ShoppingBag/ShoppingBag';
import Header from './components/Header/Header';
import Footer from './components/ProductTemplate/Footer/Footer';
import SignInUp from './components/SignInUp/SignInUp';
import { auth } from './firebase/firebse.utils';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: []
    }
  }

  unsubscribeFromAuth = () => null

  // We subscribe on Firebase to see who is currenlty singed in
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log('user', user)
      console.log('this.state.currentUser', this.state.currentUser)
    })
  }

  componentWillMount() {
    this.unsubscribeFromAuth()
  }



  render() {
    return (
      <div className="App" >
        <React.StrictMode>
          <BrowserRouter>
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/ProductTemplate/:product" component={ProductTemplate} />
              <Route exact path="/ShoppingBag" component={ShoppingBag} />
              <Route path="/SignInUp" component={SignInUp} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </React.StrictMode>
      </div >
    )
  }
}

export default App;
