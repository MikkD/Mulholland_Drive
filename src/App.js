import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Main from './components/Main/Main';
import ProductTemplate from './components/ProductTemplate/ProductTemplate'
import ShoppingBag from './components/ShoppingBag/ShoppingBag';
import Header from './components/Header/Header';
import Footer from './components/ProductTemplate/Footer/Footer';
import SignInUp from './components/SignInUp/SignInUp';
import { addUserToFirestore } from './firebase/firebse.utils';
import firebase from 'firebase';
const firestore = firebase.firestore();




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const { displayName } = firebaseUser;
        const docRef = await addUserToFirestore(firebaseUser, displayName)
        docRef.onSnapshot(async snapshot => {
          const theSnapData = snapshot.data()
          this.setState({ currentUser: theSnapData })
        })
      } else {
        this.setState({ currentUser: firebaseUser })
      }
    })
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

