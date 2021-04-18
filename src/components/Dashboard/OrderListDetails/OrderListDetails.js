import React from 'react';

const OrderListDetails = ({ order }) => {
    console.log("After map:", order.data)
    const { name, price, email } = order.data;
    return (
        <div>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
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