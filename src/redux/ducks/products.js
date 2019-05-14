const CREATE = 'ecommerce/products/CREATE'

const initialState= {
  total: 0,
  items: {}
}

export default function reducer(state= initialState, action){
  switch(action.type){
    default:
      return state
  }
}

export const createProduct = (payload) => ({
  type: CREATE,
  payload
})