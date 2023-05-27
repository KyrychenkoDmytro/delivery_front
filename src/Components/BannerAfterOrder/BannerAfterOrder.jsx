import './BannerAfterOrder.scss';
import { useEffect } from 'react';

const BannerAfterOrder = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="BannerAfterOrder">
                <div className="BannerAfterOrder__wrap">
                    <h1 className="title BannerAfterOrder__title">Thank you for your order</h1>
                    <div className="BannerAfterOrder__bg"></div>
                </div>
        </div>
    );
}

export default BannerAfterOrder;