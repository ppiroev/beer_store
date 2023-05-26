/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export default function Nav({navCartItems}){

    let numOfCartItems = navCartItems.length;
    return (
        <nav className="navbar">
            <div>
                <h1>Beerlandia</h1>
            </div>
            <div>
                <ul>
                    <Link to="/">
                    <li><i className="fi fi-br-house-chimney"></i></li>
                    </Link>
                    <Link to="/shop">
                    <li><i className="fi fi-br-beer"></i></li>
                    </Link>
                    <Link to="/cart">
                    <li><i className="fi fi-br-shopping-cart"></i>{(numOfCartItems > 0) ? numOfCartItems : "" }</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}