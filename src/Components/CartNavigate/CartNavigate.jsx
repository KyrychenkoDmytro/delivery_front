import './CartNavigate.scss';
import { useSelector } from 'react-redux';


const CartNavigate = () => {

    const { countProducts } = useSelector(state => state.cart);

    return (
        <div className="CartNavigate">
            <button className='CartNavigate__button'></button>
            <div className="CartNavigate__name">Cart(<span>{countProducts}</span>)</div>
        </div>
    );
}

export default CartNavigate;