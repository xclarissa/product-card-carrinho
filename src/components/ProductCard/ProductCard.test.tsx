import { fireEvent, render, screen } from "@testing-library/react";
import { CartProvider } from "../../contexts/CartContext";
import { SearchProvider } from "../../contexts/SearchContext";
import { ProductCard } from ".";

const mockProduct = {
  id: 1,
  title: 'Monitor',
  price: 899.99,
  imageUrl: '/img/monitor.jpg',
  isAvailable: true,
};


const renderCard = () => {
  render(
    <CartProvider>
      <SearchProvider> 
        <ProductCard
            {...mockProduct}
            onAddToCart={() => null}
        />
      </SearchProvider>
    </CartProvider>
  );
};

describe("Product card", () => {
    it("should render the title, price and img", () => {
       renderCard(); 

       expect(screen.getByText(/monitor/i)).toBeInTheDocument();
       expect(screen.getByText(/899.99/i)).toBeInTheDocument();
    })   

    it("should click on add to card", () => {
        const addItem  = jest.fn();
        render(<ProductCard {...mockProduct} onAddToCart={addItem}/>);

        const button = screen.getByRole("button", { name: /Adicionar ao carrinho/i });
        fireEvent.click(button);
        expect(addItem).toHaveBeenCalled();
    })
})