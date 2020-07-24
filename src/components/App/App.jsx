import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css'
import Main from '../Main';
import ProductTemplate from '../ProductTemplate'
import ShoppingBag from '../ShoppingBag';
import Header from '../Header';
import Footer from '../Footer/Footer';
import SignInUp from '../SignInUp';
import ContactUs from '../ContactUs';
import firebase from 'firebase/app';
import { addUserToFirestore } from '../../firebase/firebse.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';



class App extends React.Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const { displayName } = firebaseUser;
        const docRef = await addUserToFirestore(firebaseUser, displayName)
        docRef.onSnapshot(async snapshot => {
          const theSnapData = snapshot.data()
          this.props.setCurrentUser(theSnapData)
        })
      } else {
        this.props.setCurrentUser(firebaseUser)
      }
    })
  }


  render() {
    console.log('~~~~~~~~~~~~~~~App.jsx~~~~~~~~~~~~~~~')
    const { isCurrentUserLoggedIn } = this.props;
    return (
      <div className="App" >
        <React.StrictMode>
          <BrowserRouter>
            <Header />

            <div className="main-content">
              {isCurrentUserLoggedIn && <Redirect to={{ pathname: "/" }} />}
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/ProductTemplate/:product" component={ProductTemplate} />
                <Route exact path="/ShoppingBag" component={ShoppingBag} />
                {/* <Route exact path="/SignInUp" component={isCurrentUserLoggedIn ? Main : SignInUp} /> */}
                <Route exact path="/SignInUp" component={SignInUp} />
                <Route exact path="/ContactUs" component={ContactUs} />
              </Switch>
            </div>
            {/* <Footer /> */}
          </BrowserRouter>
        </React.StrictMode>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  isCurrentUserLoggedIn: state.rootUsers.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)


