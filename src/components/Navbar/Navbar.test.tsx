import { render, screen, fireEvent } from "@testing-library/react";
import { SearchProvider } from "../../contexts/SearchContext";
import { Navbar } from ".";
import { CartProvider, useCart } from "../../contexts/CartContext";
import { useEffect } from "react";

const SetupCartState = () => {
  const { addItem } = useCart();

  useEffect(() => {
    addItem({
      id: 1,
      title: "Teclado",
      imageUrl: "",
      price: 50,
      isAvailable: true,
    });
    addItem({
      id: 2,
      title: "SmartTag",
      imageUrl: "",
      price: 150,
      isAvailable: true,
    });
  }, []);

  return null;
};

const renderWithProvider = () => {
  render(
    <CartProvider>
      <SearchProvider>
        <SetupCartState />
        <Navbar />
      </SearchProvider>
    </CartProvider>
  );
};

test("should render search input and change values", () => {
  renderWithProvider();
  const input = screen.getByPlaceholderText(/buscar produtos/i);
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "mouse" } });
  expect((input as HTMLInputElement).value).toBe("mouse");
});

test("should render cart value", () => {
    renderWithProvider();
    
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText(/Total: R\$ 200.00/i)).toBeInTheDocument();
});
