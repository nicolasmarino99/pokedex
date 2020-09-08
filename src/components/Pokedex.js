import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import { onEnter, onExit } from '../animations/gsapAnimations';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
];

const Pokedex = () => (
  <>
    <Header />
    <div className="Pokedex">
      { routes.map(({ path, name, Component }) => (
        <Route key={name} path={path} exact>
          { ({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={1200}
              classNames="page"
              onEnter={onEnter}
              onExit={onExit}
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  </>
);

export default Pokedex;
