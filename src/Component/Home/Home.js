import React from 'react'
import Banner from './Banner'
import Filter from '../Home/Filter'
import CardList from './CardComponent/CardList'

export default function Home () {
  return (
    <>
      <Banner />
      <Filter />
      <CardList />
    </>
  )
}
