import './Logo.scss';

const Logo = () => {
    return (
        <div className='Logo'>
            <div className="Logo__img-wrap">
                <img src="./img/icons/logo.svg" alt="logo" />
            </div>
            <div className="Logo__name">
                Best Delivery
            </div>
        </div>
    );
}

export default Logo;