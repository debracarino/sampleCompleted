import './Home.css'

const Home = () => {
    return (
        <main>
            <h2>Make a Wishlist Come True!</h2>
            <h3>With This Application You Can:</h3>
            <ul className="mainUl">
                <li>Add an item</li>
                <li>Edit a item</li>
                <li>View items by category</li>
                <li>View all items available</li>
                <li>Delete items through the <em>View Wishlist</em> link</li>
            </ul>
        </main>
    )
}

export default Home