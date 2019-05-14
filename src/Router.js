import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NewProductContainer from './components/NewProduct/NewProductContainer';

export default () => (
  <Switch>
    <Route exact path='/new-product' component={NewProductContainer}/>
  </Switch>
)