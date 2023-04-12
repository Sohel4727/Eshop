import { Button, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./OrderHistory.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import CircleIcon from '@mui/icons-material/Circle';
import StarRateIcon from '@mui/icons-material/StarRate';
const TestingOrderHistory = () => {
  const [data, setData] = useState([])

  const order = useSelector((state) => state.orderItem)

  useEffect(() => {
    if (order) {
      setData(order);
      console.log("order==>", order);
    }

  }, [order])

  console.log(data);


  return (
    <div className="main_order_history_container">
      <div className="filter_container">filter container</div>
      <div className="right_side">
        <div className="search_container">
          <TextField className="order_history_search_input" label='Search Item' size="small" fullWidth type="text" />
          <div className="order_history_search_button_container" >
            <SearchIcon style={{ color: 'white' }} />
            <Button style={{ color: 'white' }} >Search</Button>
          </div>
        </div>
        <div className="list_container">
          {data.map((item, index) => {
            return (
              <>
                {item.orderItem.map((products) => {
                  console.log('====>', products);
                  return (
                    <>
                      <div className="order_history_list">
                        <div className="order_history_product_image">
                          <img src={products.thumbnail} width='150' height='100' alt="product pic" />
                        </div>
                        <div className="order_history_middle">
                          <p>{products.title}</p>
                          <p>color</p>
                        </div>
                        <div className="order_history_price_container">
                          <p>{`₹${products.price}`}</p>
                        </div>
                        <div className="order_history_right">
                          <p><span><CircleIcon fontSize="x-small" color='success' /></span>delevered on sep 28</p>
                          <p>your item is delevered </p>
                          <p><span><StarRateIcon fontSize="x-small" color='primary' /></span>Rate and review product</p>
                        </div>
                      </div>
                    </>
                  )
                })}


              </>
            )
          })}
        </div>

      </div>
    </div>
  );
};

export default TestingOrderHistory;
