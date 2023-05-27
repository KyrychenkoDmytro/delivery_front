import './MenuList.scss';
import MenuListItem from '../MenuListItem/MenuListItem';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/slices/products';

const MenuList = () => {
    const { items, productName } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(productName));
    }, [dispatch, productName]);

    return (
        <section className="MenuList">
            <div className="MenuList__container">
                {items.map((item) => (
                    <MenuListItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
}

export default MenuList;