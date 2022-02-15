import React from 'react';
import Banner from '../Banner/Banner';
import BrandPatner from '../BrandPatner/BrandPatner';
import ProductList from '../Product/ProductList';
import ShowReview from '../Review/ShowReview';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ProductList/>
          <ShowReview></ShowReview>
          <BrandPatner></BrandPatner>
        </div>
    );
};

export default Home;