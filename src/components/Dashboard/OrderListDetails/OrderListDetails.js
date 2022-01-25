import React from 'react';
import './OrderListDetails.css';

const OrderListDetails = (props) => {
    // console.log("After map:", order.data)
    console.log("oder", props.order.data);
    const { name, price, email } = props.order.data;
    return (
        <div style={{ backgroundColor: '#E6DDC4' }}>
            <table className="table" style={{ backgroundColor: '#678983' }}>

                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderListDetails;