import * as cartService from './services/cart.js'
import createItem from './services/item.js'

const cart = []
const mywhishlist = []

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)

await cartService.addItem(cart,item1)
await cartService.addItem(cart, item2)

await cartService.removeItem(cart, 1)

await cartService.displayCart(cart)

// await cartService.deletItem(cart, item2.name)
// await cartService.deletItem(cart, item1.name)

console.log("Shopee Cart total!")
await cartService.calculateTotal(cart)

