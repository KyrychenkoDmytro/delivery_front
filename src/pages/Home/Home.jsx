import './Home.scss';
import MenuList from '../../Containers/MenuList/MenuList';
import Sidebar from '../../Containers/Sidebar/Sidebar';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addProductsToLocalStorage } from '../../redux/slices/cart';

const Home = () => {

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
        <main className="Home">
            <div className="Home__container">
                <Sidebar />
                <MenuList />
            </div>
        </main>
    );
}

export default Home;