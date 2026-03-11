import { useCart } from '../contexts/CartContext';

const Home = () => {
    const { cart, addToCart, removeFromCart } = useCart();

    const handleClick = () => {
        const newItem = {
            id: 1,
            name: "widget",
            price: 4.99,
            quantity: 2
        }
        addToCart(newItem);
        console.log(cart);
    }
    return (
        <main>
            <h2>Home Page Content</h2>
            <p>Some filler text</p>
            <aside>Some more filler text</aside>

            <p>There are { cart.length } items in your 
                cart.</p>
            <button onClick={handleClick}>Buy Something!</button>
            <button onClick={() => removeFromCart(1)}>Remove Something</button>
        </main>
    )
}

export default Home;