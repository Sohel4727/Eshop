import react, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import "./OrderHistory.css"
const OrderHistory = () => {
    const [data, setData] = useState([])
    const order = useSelector((state) => state.orderItem);

    // this page is order history page //

    useEffect(() => {
        if (order) {
            setData(order);
            console.log("order==>", order);
        }

    }, [order])
    console.log("data", data)

    return (
        <>

        
            <h1> PRODUCT ORDER LIST </h1>
            <div className="order_history_container">
                <div className="order_history_filter_container">
                    filter container
                </div>
                
                {data.map((outerItem, index) => {
                    return (
                        <div key={index} className='order_detail' >
                            {outerItem
                                && outerItem.orderItem.map((item, index) => {
                                    return (
                                        <>
                                        
                                            <div className="order" key={index} >
                                                <h1>{item.title}</h1>
                                                <h3>{`$ ${item.price}`}</h3>
                                                <img src={item.thumbnail} alt="" width='150px' />
                                            </div>
                                            {/* <div>
                                                <h1>CUSTOMER DETAILS :- </h1>
                                                <h4> CUSTUMMER NAME : {`${outerItem.orderDetail.fName.toUpperCase()} ${outerItem.orderDetail.lName.toUpperCase()}`}</h4>
                                                <h4>CUSTUMMER ADDRESS : {outerItem.orderDetail.address.toUpperCase()}</h4>
                                                <h4>CUSTUMMER CONTACT : {outerItem.orderDetail.phone}</h4>
                                            </div> */}
                                        </>
                                    )
                                })}
                        </div>

                    )
                }
                )}
            </div>
        </>
    )
}
export default OrderHistory;