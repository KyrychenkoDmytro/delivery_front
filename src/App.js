import { Routes, Route } from 'react-router-dom';
import Header from './Containers/Header/Header';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import BannerAfterOrder from './Components/BannerAfterOrder/BannerAfterOrder';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import HistoryOfOrders from './pages/HistoryOfOrders/HistoryOfOrders';

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/thanks' element={<BannerAfterOrder />} />
          <Route path='/orders' element={<HistoryOfOrders />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;