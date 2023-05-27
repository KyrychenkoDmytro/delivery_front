import './Cart.scss';
import CartForm from '../../Components/CartForm/CartFrom';
import CartOrders from '../../Containers/CartOrders/CartOrders';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addProductsToLocalStorage } from '../../redux/slices/cart';

const Cart = () => {

    const dispatch = useDispatch();
    const { allProducts } = useSelector(state => state.cart);

    useEffect(() => {
        const items = localStorage.getItem('items');
        if (items) {
            dispatch(addProductsToLocalStorage(JSON.parse(items)))
        }
    }, [dispatch]);

    useEffect(() => {
            localStorage.setItem('items', JSON.stringify(allProducts));
    }, [allProducts]);

    return (
        <section className="Cart">
           <div className="Cart__container">
                <CartForm />
                <CartOrders />
           </div>
        </section>
    );
}

export default Cart;