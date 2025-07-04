import React from "react";
import {
  CartDecrement,
  CartImage,
  CartIncrement,
  CartItem,
  CartQtd,
  CartQuantityContainer,
  CartTitle,
  CartTotal,
  Clear,
  CloseButton,
  DrawerContainer,
  DrawerOverlay,
  EmptyCart,
  RemoveItem,
} from "./CartDrawer.styles";
import { useCart } from "../../contexts/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, getTotal, removeItem, addItem, clearCart, setItems } = useCart();

  function handleQuantityChange(id: number, newQty: number) {
    if (isNaN(newQty) || newQty < 1) return;
    console.log(items)
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  }

  if (!isOpen) return null;

  return (
    <>
      <DrawerOverlay onClick={onClose} />
      <DrawerContainer isOpen={isOpen}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Seu Carrinho</h2>
        {items.length === 0 ? (
          <EmptyCart>Seu carrinho está vazio :( </EmptyCart>
        ) : (
          <>
            {items.map((item) => (
              <CartItem key={item.id}>
                <CartTitle>{item.title}</CartTitle>
                <CartImage src={item.imageUrl} />
                <CartQuantityContainer>
                  <CartDecrement onClick={() => removeItem(item.id)}>
                    -
                  </CartDecrement>
                  <CartQtd
                    value={item.quantity}
                    min={1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                  />
                  <CartIncrement onClick={() => addItem(item)}>+</CartIncrement>
                </CartQuantityContainer>
              </CartItem>
            ))}
            <hr />
            <CartTotal>Total: R$ {getTotal().toFixed(2)}</CartTotal>
            <Clear onClick={clearCart}>Limpar Carrinho</Clear>
          </>
        )}
      </DrawerContainer>
    </>
  );
};
