import React, {Component} from 'react';
import NewProductForm from './NewProductForm';
import {connect} from 'react-redux';
import ProductCard from '../common/ProductCard';
import {onCreateProduct} from '../../redux/ducks/products';

class NewProductContiner extends Component{

    submit = values => {
        let {images, ...product} = values //saco images de values y todo lo que sobre lo meto en una nueva constante llamada product
        images = images.split(',');
        this.props.onCreateProduct({...product, images})
        console.log(images, product)
        // this.props.onCreateProduct(values)
    };

    render(){
        const { newProduct = {values: {name:"", price: ""}} } = this.props;
        const { values } = newProduct;
        return (
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-grid-match uk-child-width-1-2" uk-grid="true">
                        <div>
                            <NewProductForm onSubmit={this.submit} />
                        </div>
                        <div>
                            <ProductCard {...values} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state.form;

export default connect(mapStateToProps, {onCreateProduct})(NewProductContiner);