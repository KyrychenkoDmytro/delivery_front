import './PageNotFound.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PageNotFound = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="PageNotFound">
            <div className="container">
                <div className="PageNotFound__wrap">
                    <div className="PageNotFound__info">
                        <div className="PageNotFound__info-img"><img src="./img/PageNotFound-404.png" alt="404" /></div>
                        <h1 className="title PageNotFound__title">Page not found</h1>
                        <p className="PageNotFound__text">The page you are looking for doesn't exist or has been moved</p>
                        <Link to="/" className="btn btn_gray PageNotFound__btn">Go to Homepage</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;