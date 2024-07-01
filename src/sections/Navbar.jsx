

const Navbar = () => {
    return (
        <div className=''>
            <nav>
                <h1 className='logo'>Whitepace</h1>
                <ul>
                    <li className="products"> 
                        Products
                        <ul className="submenu">
                            <li>Product 1</li>
                            <li>Product 2</li>
                            <li>Product 3</li>
                        </ul>
                    </li>
                    <li className="solutions"> 
                        Solutions
                        <ul className="submenu">
                            <li>Solution 1</li>
                            <li>Solution 2</li>
                            <li>Solution 3</li>
                        </ul>
                    </li>
                    <li className="resources"> 
                        Resources
                        <ul className="submenu">
                            <li>Resource 1</li>
                            <li>Resource 2</li>
                            <li>Resource 3</li>
                        </ul>
                    </li>
                    <li className="pricing"> 
                        Pricing
                        <ul className="submenu">
                            <li>$100</li>
                            <li>$200</li>
                            <li>$300</li>
                        </ul>
                    </li>
                </ul>
                <button>Login</button>
                <button>Try Whitepace free</button>
            </nav>
        </div>
    )
}

export default Navbar