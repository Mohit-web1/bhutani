"use client"
import React from 'react';
import Carousel from './components/carousel/page';
import Banners from './components/baners/page';
import Info from './components/info/page';
import Left from './components/left/page';
import Cards from './components/cards/page';
import Contents from './components/contents/page';
const page = () => {
  return (
    <>
    <Carousel />
    <Banners />
    <Info />
    <Left />
    <Cards />
    <Contents />
    </>
  )
}

export default page