import Topbar from './components/topbar/Topbar';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/pages/home/Home';
import UserList from './components/pages/userList/UserList';
import User from './components/pages/user/User';

import Product from './components/pages/product/Product';
import NewProduct from './components/pages/newProduct/NewProduct';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewUser from './components/pages/newUser/NewUser';
import ProductList from './components/pages/productList/ProductList';

function App() {
  return (
    <Router>
      <div className='appContainer'>
        <div className='app'>
          <Topbar />
          <div className='sidebarContainer'>
            <Sidebar />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/users'>
                <UserList />
              </Route>
              <Route path='/user/:userId'>
                <User />
              </Route>
              <Route path='/newUser'>
                <NewUser />
              </Route>
              <Route path='/products'>
                <ProductList />
              </Route>
              <Route path='/product/:productId'>
                <Product />
              </Route>
              <Route path='/newproduct'>
                <NewProduct />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
