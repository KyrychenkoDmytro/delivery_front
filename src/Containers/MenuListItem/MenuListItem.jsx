import './MenuListItem.scss';
import { useDispatch } from 'react-redux';
import { addProductToCart, setActiveShopInCart } from '../../redux/slices/cart';

const MenuListItem = (props) => {
    const { id, category, name, imageUrl, price, discount, rank } = props;
    const dispatch = useDispatch();
    let newPrice;
    if (discount) {
        newPrice = Math.floor(price * (1 - discount));
    }

    const addToCart = () => {
        const product = {
            id,
            name,
            imageUrl,
            price,
            discount,
            count: 1,
        };

        const shopStatus = {
            status: true,
            name: id
        }

        dispatch(addProductToCart(product));
        dispatch(setActiveShopInCart(shopStatus));
    }

    return (
        <section className="MenuListItem">
            <span className="MenuListItem__name">{category}</span>
            <div className="MenuListItem__img" style={{ background: `url(${imageUrl}) no-repeat center center / cover` }}></div>
            <h6 className="title MenuListItem__product-name">{name}</h6>
            <div className="MenuListItem__product-info">
                <div className="MenuListItem__old-price">{discount ? `₴${price}.00` : ''}</div>
                <div className="MenuListItem__new-price">{discount ? `₴${newPrice}.00` : `₴${price}.00`}</div>
                <div className="MenuListItem__rating">{"⭐".repeat(rank)}</div>
            </div>
            <button
                className='btn btn_khaki MenuListItem__btn'
                onClick={addToCart}
            >
                Add to Cart
            </button>
        </section>
    );
}

export default MenuListItem;