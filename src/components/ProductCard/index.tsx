import React from "react";
import {
  Container,
  Title,
  Price,
  AddButton,
  ProductImage,
} from "./ProductCard.styles";
import { Product } from "../../data/products";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
  onAddToCart: (e: React.MouseEvent) => void;
}

export const ProductCard = ({
  title,
  price,
  imageUrl,
  isAvailable,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ProductImage src={imageUrl} />
      <Price>{price} BRL</Price>
      <AddButton onClick={onAddToCart} disabled={!isAvailable}>
        {isAvailable ? "Adicionar ao carrinho" : "Produto Indisponível"}
      </AddButton>
    </Container>
  );
};
