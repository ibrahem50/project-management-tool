import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore , applyMiddleware , compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {useSelector,Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore';
import {isLoaded,ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase';
import firebase from 'firebase/app';
import firebaseConfig from './config/fbConfig';

const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})) , reduxFirestore(firebase, firebaseConfig)
  )
  );

const rrfProps = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    userProfile: 'users', // where profiles are stored in database
    presence: 'presence', // where list of online users is stored in database
    sessions: 'sessions'
  };

  function AuthIsLoaded({ children }) {

    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;

    return children

}

ReactDOM.render(
  //<React.StrictMode>
    <Provider store={store}>
     <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded> 
       <App />
      </AuthIsLoaded>
     </ReactReduxFirebaseProvider>
    </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

