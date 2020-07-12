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
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';





class App extends React.Component {

  componentDidMount() {

    console.log('this.state', this.state)
    firebase.auth().onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const { displayName } = firebaseUser;
        const docRef = await addUserToFirestore(firebaseUser, displayName)
        docRef.onSnapshot(async snapshot => {
          const theSnapData = snapshot.data()
          // this.setState({ currentUser: theSnapData })
          // Redux
          this.props.setCurrentUser(theSnapData)
        })



      } else {
        // this.setState({ currentUser: firebaseUser })
        this.props.setCurrentUser(firebaseUser)
      }
    })
  }


  render() {
    console.log('this.props', this.props)
    return (
      <div className="App" >
        <React.StrictMode>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/ProductTemplate/:product" component={ProductTemplate} />
              {/* <Route path="/SignInUp" component={SignInUp} /> */}
              <ShoppingBag currentUser={this.props.isCurrentUserLoggedIn} />
              {/* Почему 4 раза рендериться???? Мне поэтому пришлось ставить условие */}
              {this.props.isCurrentUserLoggedIn !== null ?
                <ShoppingBag currentUser={this.props.isCurrentUserLoggedIn} /> :
                <Route path="/SignInUp" component={SignInUp} /> && <SignInUp />}
            </Switch>
            <Footer />
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


