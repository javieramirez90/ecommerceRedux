import React from 'react'
import { Field, reduxForm } from 'redux-form'

const NewProductForm = ({ handleSubmit }) => {
  // console.log("Aquí perro", props)
  // const  {handleSubmit}  = props
  return <form onSubmit={handleSubmit}>
    <div>
      <label> Nombre del producto: </label>
      <Field 
        name="name"
        component="input"
        type="text"
      />
    </div>
    <div>
      <label> Precio del producto: </label>
      <Field 
        name="precio"
        component="input"
        type="number"
      />
    </div>
    <button type="submit">Pícale perro</button>
    </form>
}

export default reduxForm({
  form: 'newProduct'
})(NewProductForm)

