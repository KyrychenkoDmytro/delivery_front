import './Sidebar.scss';
import SidebarItem from '../../Components/SidebarItem/SidebarItem';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveProductName } from '../../redux/slices/products';

const Sidebar = () => {
    const allStores = ['burger', 'pizza', 'vegetable'];
    const dispatch = useDispatch();
    const { productName } = useSelector(state => state.products);

    return (
        <section className="Sidebar">

            {allStores.map((name, i) => (
                <SidebarItem
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