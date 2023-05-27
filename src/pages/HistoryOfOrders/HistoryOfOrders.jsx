import './HistoryOfOrders.scss';
import { useEffect, useState } from "react";
import axios from '../../axios';
import { useSelector, useDispatch } from 'react-redux';
import { addProductsToLocalStorage } from '../../redux/slices/cart';

const HistoryOfOrders = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector(state => state.cart);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/orders');
            setOrders(data)
        }
        fetchData();
    }, []);

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
        <div className="HistoryOfOrders">
            <div className="HistoryOfOrders__container">
                {orders.map((item, i) => (
                    <div key={i} style={{ marginBottom: '40px' }}>
                        <div>address: {item.address}</div>
                        <div>email: {item.email}</div>
                        <div>fullName: {item.fullName}</div>
                        <div>phone: {item.phone}</div>

                        {item.products.map((item, i) => (
                            <ol key={i} style={{padding: '10px 0 0 50px'}}>
                                <li>id: {item.id}</li>
                                <li>name: {item.name}</li>
                                <li>price: {item.price}</li>
                                <li>imageUrl: {item.imageUrl}</li>
                                <li>discount: {item.discount}</li>
                                <li>count: {item.count}</li>
                            </ol>
                        ))}

                    </div>
                ))}
            </div>
        </div>
    )
}

export default HistoryOfOrders;