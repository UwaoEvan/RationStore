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

                return {
                    ...state,
                    items: [...state.items]
                }

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
            let found = state.items.filter(i => i.id === action.payload);
            if (found[0]) {
                if (found[0].qty === 1) {
                    return {
                        ...state,
                        items: [...state.items.filter(p => p.id !== action.payload)]
                    }
                } else {
                    let newQty = found[0].qty - 1;
                    found[0].qty = newQty;
                    found[0].total = found[0].price * newQty;

                    return {
                        ...state,
                        items: [...state.items]
                    }
                }
            }

        case 'DELETE':
            return {
                ...state,
                items: [...state.items.filter(i => i.id !== action.payload)]
            }
        default:
            return state;
    }
}