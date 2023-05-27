import './CartForm.scss';
import { useSelector } from 'react-redux';

import { useState } from 'react';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearAllInCartSlice } from '../../redux/slices/cart';

const CartForm = () => {
    const { totalCost, discount, allProducts } = useSelector(state => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const formData = {
        fullName,
        email,
        address,
        phone,
        products: allProducts,
        totalCost,
        totalDiscount: discount
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
            try {
                const response = await axios.post('/orders', formData);
                console.log(response);
                if (response.status >= 200 && response.status <= 299) {
                    dispatch(clearAllInCartSlice());
                    setEmail('');
                    setFullName('');
                    setAddress('');
                    setPhone('');
                    navigate('/thanks');
                }
            } catch (error) {
                console.error(error);
            }
    };


    return (
        <div className="CartForm">
            <div className="CartForm__wrap">
                <form onSubmit={handleSubmit}>
                    <div className="CartForm__full-name-wrap">
                        <div className="CartForm__label CartForm__full-name-label">Full Name*</div>
                        <div className="CartForm__input CartForm__full-name-input">
                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                type="text"
                                placeholder="Your Full Name"
                                required />
                        </div>
                    </div>
                    <div className="CartForm__email-wrap">
                        <div className="CartForm__label CartForm__email-label">Your Email*</div>
                        <div className="CartForm__input CartForm__email-input">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Your Email Address"
                                required
                            />
                        </div>
                    </div>
                    <div className="CartForm__address-wrap">
                        <div className="CartForm__label CartForm__address-label">Address*</div>
                        <div className="CartForm__input CartForm__address-input">
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                type="text"
                                placeholder="Your address"
                                required />
                        </div>
                    </div>
                    <div className="CartForm__phone-wrap">
                        <div className="CartForm__label CartForm__phone-label">Phone number*</div>
                        <div className="CartForm__input CartForm__phone-input">
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                placeholder="Phone: +380501234567"
                                required
                            />
                        </div>
                    </div>
                    <button className="btn btn_pagination-grey CartForm__btn-confirm">Submit</button>
                </form>
            </div>
            <div className="CartForm__total">
                <div className="title CartForm__total-cost">Total Cost <span>{totalCost}₴</span></div>
                <div className="title CartForm__total-discont">Discount <span>{discount}₴</span></div>
            </div>
        </div>
    );
}

export default CartForm;