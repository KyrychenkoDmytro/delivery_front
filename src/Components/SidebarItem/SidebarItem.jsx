import './SidebarItem.scss';

const SidebarItem = (props) => {
    const { onClick, isActive, isShopActiveInCart, name } = props;
    const storeName = {
        burger: "Mc Donny",
        pizza: "King Pizza",
        vegetable: "Fresh Market"
    }
    const storeUrl = {
        burger: "https://i.postimg.cc/W1nVrS4y/burger-logo.jpg",
        pizza: "https://i.postimg.cc/HLkgt5ck/pizza-logo.jpg",
        vegetable: "https://i.postimg.cc/TPNXNwgq/vegetable-logo.jpg"
    }

    return (
        <div
            className={isActive ? `SidebarItem ${isShopActiveInCart} active` : `SidebarItem ${isShopActiveInCart}`}
            style={{ background: `no-repeat center center / cover url(${storeUrl[name]})` }}
            onClick={() => onClick()}
        >
            <div className="SidebarItem__wrap">
                <h3>{storeName[name]}</h3>
            </div>
        </div>
    );
}

export default SidebarItem;