import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { South_Korea } from './South Korea/South Korea';
import { Japan } from './Japan/Japan';
import { Recommended } from './recommended/recommended'
import { My_list } from './My_list/My_list';
import { Destinations } from './Destinations/Destinations';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return ( // anything within the return becomes html and outside the return is javascript. Think of using components as HTML
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <div> {userName} </div>
          <br/>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              The Bucketlist
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Home
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                <NavLink className='nav-link' to='destinations'>
                  Destinations
                </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='mylist'>
                    My List
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='recommended'>
                    Recommended
                  </NavLink>
                </li>
              )}
            </menu>
          </nav>
        </header>

        <Routes>
          <Route // This function allows us to route to each page and is a given function from a library
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          /> 
          {/* props is the blank inout, and treat it like an object, so if you are given multiple props we would do props.username or props.foo
          to get the specific input */}
          <Route path='/japan' element={<Japan />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/southkorea' element={<South_Korea />} />
          <Route path='/mylist' element={<My_list />} />
          <Route path='/recommended' element={<Recommended />} />
          <Route path='/' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer >
          <div className='container-fluid'>
            <span >Mick Buck</span>
            <a href='https://github.com/Mike-B-123/startup'>
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;