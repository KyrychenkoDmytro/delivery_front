import './CartItem.scss';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCountProduct, removeProduct } from '../../redux/slices/cart';

const CartItem = ({ id, name, imageUrl, count, price, discount }) => {
    const dispatch = useDispatch();
    const [countValue, setCountValue] = useState(count || 1);
    let newPrice;

    if (discount) {
        newPrice = Math.floor(price * (1 - discount));
    }

    const newCountValue = (e) => {
        let count = parseInt(e.target.value.replace(/e/gi, ''));

        if (count <= 0) {
            setCountValue(1);
            return false;
        }
        setCountValue(count);
        dispatch(changeCountProduct({ id, count }));
    }

    const onBlurValue = () => {
        if (isNaN(countValue)) {
            setCountValue(1);
            dispatch(changeCountProduct({ id, count: 1 }));
        } else {
            setCountValue(countValue);
            dispatch(changeCountProduct({ id, count: countValue }));
        }
    }

    const removeFromCart = () => {
        if (window.confirm("Are you sure you want to delete the product?")) {
            dispatch(removeProduct(id));
        }
    }

    return (
        <div className="CartItem">
            <div className="CartItem__wrap">
                <div
                    className="CartItem__name"
                    style={{ background: `rgba(253, 176, 45, 0.16) url(${imageUrl}) no-repeat center center / cover` }}
                >
                    {name}
                </div>
                <div className="CartItem__wrapper-price">
                    <div className="CartItem__old-price">{discount ? `₴${price}.00` : ''}</div>
                    <div className="CartItem__new-price">{discount ? `₴${newPrice}.00` : `₴${price}.00`}</div>
                </div>
                <div className="CartItem__wrapper-quantity">
                    <div className="CartItem__quantity-label">Quantity : </div>
                    <div className="CartItem__quantity-wrapper-input">
                        <input
                            className="CartItem__quantity-input"
                            type="number"
                            value={countValue}
                            onChange={newCountValue}
                            onBlur={onBlurValue}
                        />
                    </div>
                </div>
                <button
                    className="CartItem__btn-cancel-order"
                    onClick={removeFromCart}
                ></button>
            </div>
        </div>
    );
}

export default CartItem;