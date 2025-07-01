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
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id} 
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            isAvailable={product.isAvailable}
            onAddToCart={(e) => {
              e.preventDefault();
              addItem(product);
            }}
          />
        ))}
      </ProductsGrid>
    </>
  );
}

export default App;
