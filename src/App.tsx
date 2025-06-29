import { ProductCard } from "./components/ProductCard";
import { products } from "./data/products";
import { Navbar } from "./components/Navbar";
import { ProductsGrid } from "./App.styles";
import { useSearch } from "./contexts/SearchContext";
import { useCart } from "./contexts/CartContext";

function App() {
  const { searchTerm } = useSearch();
  const { addItem } = useCart();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <ProductsGrid>
        {filteredProducts.map(({ id, imageUrl, title, price, isAvailable }) => (
          <ProductCard
            key={id}
            title={title}
            price={price}
            imageUrl={imageUrl}
            isAvailable={isAvailable}
            onAddToCart={() => {
              addItem({ id, imageUrl, isAvailable, price, title });
            }}
          />
        ))}
      </ProductsGrid>
    </>
  );
}

export default App;
