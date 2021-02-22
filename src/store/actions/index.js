export const addToCart = product => {
    return { type: 'ADD', payload: product }
}

export const removeFromCart = product => {
    return ({ type: 'REMOVE', payload: product.id })
}

export const deleteItem = id => {
    return ({ type: 'DELETE', payload: id })
}