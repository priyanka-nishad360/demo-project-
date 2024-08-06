import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center' style={{ backgroundColor: '#d4edda', color: '#155724', padding: '1rem', borderRadius: '0.25rem' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>Payment Successful</h2>
      <p style={{ marginBottom: '0.5rem' }}>Thank you for your payment. Your transaction has been completed successfully.</p>
      <p style={{ marginBottom: '0.5rem' }}>Transaction ID: 1234567890</p>
      <button onClick={handleClick} style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.25rem', cursor: 'pointer' }}>Continue Shopping</button>
    </div>
  )
}

export default PaymentSuccess