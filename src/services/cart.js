//quais ações o carrinho pode fazer



// adicionar item
async function addItem(userCart, item) {
    userCart.push(item)
}


//calcular o total
async function calculateTotal(userCart) {
    
    
    const result = userCart.reduce((total, item)=> total + item.subtotal(),0)
    console.log(result)
}



//deletar item


async function deletItem(userCart, name) {
    
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== - 1) {
        
        userCart.splice(index, 1)

    }

}

// remover  um item do carrinho


async function removeItem(userCart, index) {
    
    const deleteIndex = index - 1
   
    if (deleteIndex >= 0 && deleteIndex < userCart.length && userCart[deleteIndex].quantity > 1) {
        userCart[deleteIndex].quantity-=1
    }
    else if (userCart[deleteIndex].quantity == 1) {
        
        deletItem(userCart, userCart[deleteIndex].name)

    }
    //const indexFound = userCart.findIndex((p) => p.name === item.name)


}


async function  displayCart(userCart) {
    
    console.log("Shopee cart list")
    userCart.forEach((item, index) =>  {
        
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()} `)

    });


}



export {
    addItem,
    calculateTotal,
    deletItem,
    removeItem,
    displayCart,
}



