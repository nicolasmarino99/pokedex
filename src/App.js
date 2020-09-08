import React, { useEffect, useState } from 'react';
import Home from './pages/Home'
import About from './pages/About'
import logo from './logo.svg';
import { Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import { CSSTransition } from 'react-transition-group';
import {gsap} from 'gsap';


const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/about', name: 'About', Component: About},
]




const Pokedex = () => {
  const onEnter = node => {
    gsap.from([node.children[0].firstElementChild,node.children[0].lastElementChild], 0.6, {
      y: 30, 
      delay: .6,
      ease: 'power3.InOut',
      opacity: 0,
      stagger: {
        amount: .6
      }
    })
  }

  const onExit = node => {
    gsap.to([node.children[0].firstElementChild,node.children[0].lastElementChild], 0.6, {
      y: -30, 
     
      ease: 'power3.InOut',
    
      stagger: {
        amount: .6
      }
    })
  
  }
  return (
    <>
    <Header/>
    <div className="Pokedex">
    { routes.map( ({path, name, Component}) => (
        <Route key={name} path={path} exact>
          { ( { match } ) => (
            <CSSTransition 
            in={match != null} 
            timeout={1200} 
            classNames="page"
            onEnter={onEnter}
            onExit={onExit}
             unmountOnExit>
              <div className="page">
                <Component/>
              </div>
            </CSSTransition>
          )}
        </Route>
    ))}
    </div>
    </>
  )
}

const Loader = () => (<div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Loading...
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
  </a>
</header>
</div>)

const App = () => {
  const [state, setState] = useState({ loading: true}) 
  const sleep = time => {
    return new Promise(resolve => setTimeout(resolve,time))
  }
  const charge = async (time = 3000) => {
    await sleep(time)
    setState({
      loading: false
    });
  };

  useEffect(() => {
    charge();
  });
  
  if (state.loading) { return (<Loader />)};

  return (
    <Pokedex />
  )
  
}

export default App;
