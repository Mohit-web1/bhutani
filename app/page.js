"use client"
import React from 'react';
import Carousel from './components/carousel/page';
import Banners from './components/baners/page';
import Info from './components/info/page';
import Left from './components/left/page';
import Cards from './components/cards/page';
const page = () => {
  return (
    <>
    <Carousel />
    <Banners />
    <Info />
    <Left />
    <Cards />
    </>
  )
}

export default page