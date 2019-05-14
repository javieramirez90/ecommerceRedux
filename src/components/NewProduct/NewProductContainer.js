import React, { Component } from 'react'
import NewProductForm from './NewProductForm'
import { connect } from 'react-redux'
import ProductCard from '../common/ProductCard'


class NewProductContainer extends Component {

  submit = values => {
    console.log(values)
  }

  render() {
    console.log(this.props)
    // this.props.newProduct != undefined ? {values} = this.props.newProduct : values
    // const {values={}} = this.props.newProduct
    const {newProduct} = this.props
    return (
      <div>
        <NewProductForm onSubmit={this.submit} />
        <ProductCard {...newProduct}/>
      </div>
    )
  }
}

const mapSateToProps = (state) => {
  return state.form;
}

export default  connect(mapSateToProps, {})(NewProductContainer)