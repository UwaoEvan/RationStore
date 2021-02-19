const initState = {
    items: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            const selected = state.items.filter(item => item.id === action.payload.id);
            if (selected[0]) {
                let newQty = selected[0].qty + 1;
                selected[0].qty = newQty;
                selected[0].price = action.payload.price;
                selected[0].total = selected[0].qty * action.payload.price;
            } else {
                let newProduct = {
                    id: action.payload.id,
                    price: action.payload.price,
                    title: action.payload.title,
                    image: action.payload.image,
                    total: action.payload.price,
                    qty: 1
                }
                return {
                    ...state,
                    items: [...state.items, newProduct]
                }
            }

        case 'REMOVE':
            const remove = state.items.filter(item => item.id !== action.payload);
            return {
                ...state,
                items: [...state.items, remove]
            }
        default:
            return state;
    }
}