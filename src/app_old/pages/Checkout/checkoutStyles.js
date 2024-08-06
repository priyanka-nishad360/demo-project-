import styled from 'styled-components';

// export const PaymentPageWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   margin: 1rem;
// `;

// export const PaymentForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   max-width: 800px;
//   width: 100%;
//   padding: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
// `;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const PaymentInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const PaymentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1rem;
`;

export const MerchantDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  min-height: 150px;
  margin: 1rem auto;
`;

export const Select = styled.select`
  text-align: center;
  border: 2px solid #ccc;
  padding: 0.5rem;
  margin-top: 5px;
`;