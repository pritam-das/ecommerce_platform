export const addItemToCart = (existingCartItems, cartItemToAdd) => {
    const existingCartItem = existingCartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if(existingCartItem){
        return existingCartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...existingCartItems, {...cartItemToAdd, quantity: 1}];
}