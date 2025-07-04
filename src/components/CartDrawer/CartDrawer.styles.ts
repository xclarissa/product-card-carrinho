import styled from 'styled-components';
import { HTMLAttributes } from 'react';

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export const DrawerOverlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
`;

// corrige o erro "React does not recognize the `isOpen` prop on a DOM element."
export const DrawerContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<DrawerProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 320px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  z-index: 11;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;


export const EmptyCart = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: #000;
`;

export const CloseButton = styled.button`
    margin-left: auto;
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
`;

export const CartItem = styled.div`
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
`;

export const CartTitle = styled.h2`
    color: #007bff;
`;

export const CartImage = styled.img`
    
`;

export const CartQuantityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    max-width: 100px;
    width: 100%;
    background-color: white;
    border: 1px solid #EEEEEE;
    border-radius: 6px;
    overflow: hidden;
    font-size: 18px;
`

export const CartDecrement = styled.a`
    color: #000;
    cursor: pointer;
`;

export const CartQtd = styled.input`
    color: #000;
    width: 40px;
    text-align: center;
    border: none;
`;

export const CartIncrement = styled.a`
    color: #000;
    cursor: pointer;
`;

export const RemoveItem = styled.button`
    color: #007bff;
    background-color: #c9c9c9;
    padding: 6px;
    border-radius: 4px;
    margin-left: 135px;
`;

export const CartTotal = styled.p`
    padding: 5px;
    color: #000;
`;

export const Clear = styled.button`
    color: #fff;
    background-color: #007bff;
    padding: 6px;
    border-radius: 4px;
`;
