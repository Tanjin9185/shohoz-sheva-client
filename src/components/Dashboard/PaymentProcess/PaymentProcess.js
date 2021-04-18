import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IgtvjLLRMXTgMTDhk9SHZX5BYO3kEUkXj9VswCqMr1BOmraHYCKkKaU0WoXTekCmc4SL6d9HErOHsfjXGdhwQ2A00i0wXE6Th'
);

const PaymentProcess = ({newService}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm newService={newService}/>
        </Elements>
    );
};

export default PaymentProcess;