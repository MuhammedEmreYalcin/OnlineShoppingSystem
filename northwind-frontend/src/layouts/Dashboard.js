import React from 'react';
import Navi from "./Navi";
import Categories from './Categories';
import ProductList from '../pages/ProductList';
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import { ToastContainer } from 'react-toastify';
import ProductAdd from '../pages/ProductAdd';

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position='bottom-right'/>
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
            <Categories/>
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route exact path="/" element={<ProductList/>} />
              <Route path="/products" element={<ProductList/>} />
              <Route path="/products/:name" element={<ProductDetail/>} />
              <Route path="/cart" element={<CartDetail/>} />
              <Route path="/product/add" element={<ProductAdd/>} />
            </Routes>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}

