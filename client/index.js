import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import {getClientStore} from './store'
import routes from './Routes'

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
      <div>
      {renderRoutes(routes)}
      </div>
      </BrowserRouter>
    </Provider>
  )
}
const renderMethod = !!module.hot ? ReactDom.render : ReactDom.hydrate;
renderMethod(<App />, document.getElementById('root'))