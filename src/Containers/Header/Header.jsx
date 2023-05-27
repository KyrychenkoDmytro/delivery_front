import './Header.scss';
import Logo from '../../Components/Logo/Logo';
import CartNavigate from '../../Components/CartNavigate/CartNavigate';


import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="Header">
            <div className="Header__wrap">
                <nav>
                    <ul className='Header__ul'>
                        <li>
                            <Link className='Header__Logo-link' to="/">
                                <Logo parentClass="Logo_header" />
                            </Link>
                        </li>
                        <li>
                            <Link className='Header__CartNavigate-link' to="/cart">
                                <CartNavigate />
                            </Link>
                        </li>
                        <li>
                            <Link to="/orders">History of orders</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;