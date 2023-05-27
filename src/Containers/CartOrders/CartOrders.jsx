import './CartOrders.scss';
import CartItem from '../../Components/CartItem/CartItem';
import { useSelector } from 'react-redux';


const CartOrders = () => {
    const { allProducts } = useSelector(state => state.cart);

    return (
        <div className="CartOrders">
            <div className="CartOrders__wrap">
                {allProducts.map((item) => (
                    <CartItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default CartOrders;