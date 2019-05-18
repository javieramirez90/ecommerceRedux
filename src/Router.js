import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewProductContiner from './components/NewProduct/NewProductContainer';
import ListProductsContainer from './components/ListProducts/ListProductsContainer'
import EditProductContainer from './components/EditProducts/EditProductContiner'

export default () => (
    <Switch>
        <Route exact path="/new-product" component={NewProductContiner} />
        <Route exact path="/all-products" component={ListProductsContainer} />
        <Route path="/edit/:id" component={EditProductContainer} />
    </Switch>
)