import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  padding: 12px;
  color: white;
  background-color: #9d53c3;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: #613864;
  }
  :active {
    transform: scale(0.9);
  }
`;
