import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss'
import Main from '../Main';
import ProductTemplate from '../ProductTemplate'
import ShoppingBag from '../ShoppingBag';
import Header from '../Header';
import Footer from '../Footer/Footer';
import SignInUp from '../SignInUp';
import ContactUs from '../ContactUs';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import firebase from 'firebase/app';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { addUserToFirestore } from '../../firebase/firebse.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';

// const Main = lazy(() => import('../Main'));
// const ProductTemplate = lazy(() => import('../ProductTemplate'));
// const ShoppingBag = lazy(() => import('../ShoppingBag'));
// const Header = lazy(() => import('../Header'));
// const Footer = lazy(() => import('../Footer'));
// const SignInUp = lazy(() => import('../SignInUp'));
// const ContactUs = lazy(() => import('../ContactUs'));



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
    const { isCurrentUserLoggedIn } = this.props;
    return (
      <div className="App" >
        <React.StrictMode>
          <BrowserRouter>
            <ErrorBoundary>
              {/* <Suspense fallback={<Spinner />}> */}
              <Header />
              <div className="main-content">
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/ProductTemplate/:product" component={ProductTemplate} />
                  <Route exact path="/ShoppingBag" component={ShoppingBag} />
                  <Route exact path='/SignInUp' component={isCurrentUserLoggedIn ? Main : SignInUp} />
                  <Route exact path="/ContactUs" component={ContactUs} />
                  <Route exact path="/Button" component={Button} />
                </Switch>
              </div>
              <Footer />
              {/* </Suspense> */}
            </ErrorBoundary>
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


