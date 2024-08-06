import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddCartButton } from '../../../styles/globalStyles';
import { StoreContext } from '../../../store/store-context';
import { API_CART } from '../../../store/actions';

const insurancePlansData = [
  {
    id: 1,
    name: 'Basic Plan',
    title: 'Basic Plan Health Insurance',
    coverage: 'Coverage for accidents up to ₹3,999',
    price: 3999,
    MonthlyPlan: '₹3999/month',
  },
  {
    id: 2,
    name: 'Standard Plan',
    title: 'Standard Plan Health Insurance',
    coverage: 'Coverage for accidents up to ₹4,999',
    price: 4999,
    MonthlyPlan: '₹4999/month',
  },
  {
    id: 3,
    name: 'Premium Plan',
    title: 'Premium Plan Health Insurance',
    coverage: 'Coverage for accidents up to ₹5,999',
    price: 5999,
    MonthlyPlan: '₹5999/month',
  },
];

const HealthInsurancePlan = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(StoreContext);
  const [cart, setCart] = useState([]);
  const [info, setInfo] = useState({});
  const [isAnyItemInCart, setIsAnyItemInCart] = useState(false);

  useEffect(() => {
    const prevData = JSON.parse(localStorage.getItem('apiCart')) || [];
    setCart(prevData);
    const InsuranceInfo = JSON.parse(localStorage.getItem('InsuranceInfo')) || {};
    setInfo(InsuranceInfo);
    const isItemInCart = prevData.some((item) => item.insuranceCategory === 'Health Insurance');
    setIsAnyItemInCart(isItemInCart);
  }, []);

  const handleAddToCart = (plan) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((item) => item.id === plan.id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...plan, link:'/select_health_insurance_plan', insuranceCategory: info });
    }

    localStorage.setItem('apiCart', JSON.stringify(updatedCart));
    dispatch({ type: API_CART, payload: updatedCart });
    toast.success('Insurance Plan Added to Cart!');
    navigate('/cart');
    setIsAnyItemInCart(true);
  };

  const handleRemoveFromCart = (plan) => {
    const updatedCart = cart.filter((item) => item.id !== plan.id);

    localStorage.setItem('apiCart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    dispatch({ type: API_CART, payload: updatedCart });
    toast.success('Insurance Plan Removed from Cart!');

    const isItemInCart = updatedCart.some((item) => item.insuranceCategory === 'Health Insurance');
    setIsAnyItemInCart(isItemInCart);
  };

  const renderInsurancePlanCards = () => {
    return insurancePlansData.map((plan) => (
      <div
        key={plan.id}
        className="bg-white border rounded-lg shadow-md p-4 mx-2 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
        <p className="text-gray-600">{plan.coverage}</p>
        <p className="text-blue-600 font-semibold mt-2">{plan.MonthlyPlan}</p>
        {cart.some((item) => item.id === plan.id) ? (
          <div className="mt-4">
            <AddCartButton onClick={() => handleRemoveFromCart(plan)}>Remove from Cart</AddCartButton>
          </div>
        ) : (
          <div className="mt-4">
            <AddCartButton
              onClick={() => handleAddToCart(plan)}
              disabled={isAnyItemInCart}
            >
              Add to Cart
            </AddCartButton>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="text-center min-h-screen bg-gray-100 py-8">
      <h2 className="text-2xl font-semibold mb-4">Insurance Plans</h2>
      <div className="flex flex-wrap justify-center">{renderInsurancePlanCards()}</div>
    </div>
  );
};

export default HealthInsurancePlan;
