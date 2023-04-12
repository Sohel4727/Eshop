import { Button, TextField } from '@mui/material'
import React from 'react'
import "./CategoryNavBar.css"
const CategoryNavBar = ({data,setFilter,filterItem}) => {
  return (
    <div className='main_category_container'>
        <div className="category_buttons">
                <Button variant='text' onClick={() => setFilter(data)} >All Products </Button>
                <Button variant='text' onClick={() => filterItem("smartphones", setFilter, data)} >Smart phones</Button>
                <Button variant='text' onClick={() => filterItem("laptops", setFilter, data)}>Laptop </Button>
                <Button variant='text' onClick={() => filterItem("fragrances", setFilter, data)} >Fragrances</Button>
                <Button variant='text' onClick={() => filterItem("skincare", setFilter, data)} >Skincare</Button>
                <Button variant='text' onClick={() => filterItem("groceries", setFilter, data)} >Groceries</Button>
                <Button variant='text' onClick={() => filterItem("home-decoration", setFilter, data)} >home-decoration</Button>
            <div className='category_input_container'>
                <input className='category_search_input' type="text" placeholder='Search' />
            </div>
            <div>
                <h4>sort</h4>
            </div>
            </div>
    </div>
  )
}

export default CategoryNavBar