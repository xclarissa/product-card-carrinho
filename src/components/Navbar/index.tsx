import { useState } from 'react'
import { ButtonGroup, Logo, NavContainer, SearchInput, Button } from './Navbar.styles'
import { useSearch } from '../../contexts/SearchContext';
import { useCart } from '../../contexts/CartContext';

export const Navbar = () => {
  const { items, getTotal } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <NavContainer> 
        <Logo>DevStore</Logo>
        <SearchInput 
          type="text"
          value={searchTerm}
          placeholder="Buscar produtos"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ButtonGroup>
            <span>{totalItems}</span>
            <span>Total: R$ {getTotal().toFixed(2)}</span>
            <Button title="Carrinho 🛒">🛒</Button>
            <Button onClick={handleLoginLogout}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </Button>
        </ButtonGroup>
    </NavContainer>
  )
}
