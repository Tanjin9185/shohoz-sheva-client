import React, { useEffect, useState } from 'react';
import OrderListDetails from '../OrderListDetails/OrderListDetails';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {

    const [orderList, setOrderList] = useState();
    useEffect(() => {
        fetch('https://evening-badlands-03191.herokuapp.com/bookingList')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
    //  console.log("oderlisy1",orderList[1].data)
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-7 col-sm-12 col-12 d-flex justify-content-center ml-3 mt-5 pt-5 pb-5" style={{ backgroundColor: '#E6DDC4' }}>
                <div>
                    <h1 className="text-center mb-5">Order List</h1>
                    <table className="table p-5 m-5" style={{ backgroundColor: '#678983' }}>
                        <thead>
                            <tr >
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        orderList && orderList.map(order => <OrderListDetails order={order}></OrderListDetails>)
                    }

                </div>
            </div>
        </div>
    );
};

export default OrderList;