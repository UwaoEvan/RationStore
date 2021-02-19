export const addToCart = product => {
    return { type: 'ADD', payload: product }
}

export const removeFromCart = pid => {
    return ({ type: 'REMOVE', payload: pid })
}