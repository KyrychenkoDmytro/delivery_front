import './Sidebar.scss';
import SidebarItem from '../../Components/SidebarItem/SidebarItem';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveProductName } from '../../redux/slices/products';

const Sidebar = () => {
    const allStores = ['burger', 'pizza', 'vegetable'];
    const dispatch = useDispatch();
    const { productName } = useSelector(state => state.products);
    const { isShopActiveInCart } = useSelector(state => state.cart);

    const setDisabled = (name, shopActiveName) => {
        name = name.substring(0, 3);
        shopActiveName = shopActiveName.name.substring(0, 3);
        if (name === shopActiveName) {
            return '';
        } else {
            return 'disabled'
        }
    }

    return (

        <section className="Sidebar">

            {allStores.map((name, i) => (
                <SidebarItem
                    isShopActiveInCart={isShopActiveInCart.status ? setDisabled(name, isShopActiveInCart) : ''}
                    isActive={productName === name ? true : false}
                    onClick={() => dispatch(changeActiveProductName(name))}
                    name={name}
                    key={name}
                />
            ))}

        </section>
    );
}

export default Sidebar;