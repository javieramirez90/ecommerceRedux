import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customTextarea } from '../common/fields/customFields';
import { isRequired, minLng, maxLng, minPrice, maxPrice, maxCharacters, maxImages } from '../../utils/validators'
import { connect } from 'react-redux'


const NewProductForm = ({ handleSubmit }) => (
    <form className="uk-form-stacked uk-text-left" onSubmit={handleSubmit}>
        <Field
            name="name"
            component={ customInput }
            type="text"
            label="Nombre del producto:"
            validate={[isRequired, minLng, maxLng]}
            normalize={maxCharacters}
        />
        <Field
            name="price"
            component={ customInput }
            type="number"
            label="Precio del producto:"
            validate={[minPrice, maxPrice]}
        />
        <Field
            name="desc"
            component={ customTextarea }
            label="Descipción del producto:"
        />
        <Field
            name="images"
            component={ customTextarea }
            label="Imágenes del producto:"
            validate={[maxImages]}
        />
    
        <button className="uk-button uk-button-primary uk-margin-auto uk-display-block" type="submit">Picale mijo</button>
    </form>
)

// const validate = values => {
//     let errors = {};

//     if(!values.name){
//         errors.name = "El campo de nombre es requerido"
//     }
//     return errors
    
// }

const withForm = reduxForm({
    form: "newProduct",
    // validate
})(NewProductForm)

// You have to connect() to any reducers that you wish to connect to yourself
export default connect(
    state => {
        let {images, ...product} = state.products.product;
        images = images && images instanceof Array ? images.join(',') : images;
        return { 
            initialValues: {...product, images}
        } // pull initial values from account reducer
    },
    {}
  )(withForm)