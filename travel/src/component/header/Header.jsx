import React from 'react'
// import Navbar from './Navbar'
// import CategoryTabs from './CatageryTab'
import SearchBar from './Searchbar'
import './Header.css'
import Navbar from './Navbar'
const Header = () => {
  return (
    <>
    <Navbar/>
    {/* <CategoryTabs /> */}
    <SearchBar />
    </>
  )
}

export default Header