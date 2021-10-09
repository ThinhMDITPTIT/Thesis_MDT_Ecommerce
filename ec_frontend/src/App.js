import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Page_Layout/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';
import React from 'react';
import Footer from './components/Page_Layout/Footer/Footer';
import Home from './components/Home/Home';
import ProductDetails from './components/Product/Product_Details/Product-Details';
import Products from './components/Product/Products/Products';
import Search from './components/Product/Search/Search';
import LoginSignUp from './components/User/Login_Register/Login-Register';
import store from './store';
import { loadUser } from './actions/user-action';
import UserOptions from './components/Page_Layout/Header/User-Option';
import { useSelector } from 'react-redux';
import Profile from './components/User/Profile/Profile';
import ProtectedRoute from './components/Route/Protected-Route';
import UpdateProfile from './components/User/Update_Profile/Update-Profile';
import UpdatePassword from './components/User/Update_Password/Update-Password';
import ForgotPassword from './components/User/Forgot_Password/Forgot-Password';
import ResetPassword from './components/User/Reset_Password/Reset-Password';
import Cart from './components/Cart/Cart_View/Cart-View';
import Shipping from './components/Cart/Shipping/Shipping';
import ConfirmOrder from './components/Cart/Confirm_Order/Confirm-Order';
import axios from 'axios';
import Payment from './components/Cart/Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './components/Cart/Order_Success/Order-Success';
import MyOrders from './components/Order/My_Orders/My-Orders';
import OrderDetails from './components/Order/Order_Details/Order-Details';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import ProductList from './components/Admin/Product_List/Product-List';
import NewProduct from './components/Admin/New_Product/New-Product';
import UpdateProduct from './components/Admin/Update_Product/Update-Product';
import OrderList from './components/Admin/Order_List/Order-List';
import ProcessOrder from './components/Admin/Process_Order/Process-Order';
import UsersList from './components/Admin/User_List/User-List';
import UpdateUser from './components/Admin/Update_User/Update-User';
import ProductReviews from './components/Admin/Product_Reviews/Product-Reviews';
import Contact from './components/Page_Layout/Contact/Contact';
import About from './components/Page_Layout/About/About';
import NotFound from './components/Page_Layout/Not-Found/Not-Found';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState('');

  async function getStripeApiKey() {
    const { data } = await axios.get('/api/v1/stripeapikey');

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener('contextmenu', (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path='/process/payment' component={Payment} />
        </Elements>
      )}

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product/:id' component={ProductDetails} />
        <Route exact path='/products' component={Products} />
        <Route path='/products/:keyword' component={Products} />

        <Route exact path='/search' component={Search} />

        <Route exact path='/contact' component={Contact} />

        <Route exact path='/about' component={About} />

        <ProtectedRoute exact path='/account' component={Profile} />

        <ProtectedRoute exact path='/me/update' component={UpdateProfile} />

        <ProtectedRoute
          exact
          path='/password/update'
          component={UpdatePassword}
        />

        <Route exact path='/password/forgot' component={ForgotPassword} />

        <Route exact path='/password/reset/:token' component={ResetPassword} />

        <Route exact path='/login' component={LoginSignUp} />

        <Route exact path='/cart' component={Cart} />

        <ProtectedRoute exact path='/shipping' component={Shipping} />

        <ProtectedRoute exact path='/success' component={OrderSuccess} />

        <ProtectedRoute exact path='/orders' component={MyOrders} />

        <ProtectedRoute exact path='/order/confirm' component={ConfirmOrder} />

        <ProtectedRoute exact path='/order/:id' component={OrderDetails} />

        <ProtectedRoute
          isAdmin={true}
          exact
          path='/admin/dashboard'
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path='/admin/products'
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path='/admin/product'
          isAdmin={true}
          component={NewProduct}
        />

        <ProtectedRoute
          exact
          path='/admin/product/:id'
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path='/admin/orders'
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path='/admin/order/:id'
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path='/admin/users'
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path='/admin/user/:id'
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path='/admin/reviews'
          isAdmin={true}
          component={ProductReviews}
        />

        <Route
          component={
            window.location.pathname === '/process/payment' ? null : NotFound
          }
        />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
