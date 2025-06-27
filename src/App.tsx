import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import { Form } from './components/formulario'

function App() {
  const [count, setCount] = useState(0);

  async function fetchCharacter() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      return response.json();
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  const handleClick = () => {
    console.log("Clicou no app");
    setCount(count + 1)
 
  }

  return (
    <>
    <Form count={count} onClick={handleClick} />
      <Button variant='primary' size='md' onClick={() => setCount(count - 1)}>-</Button>{count}
      <Button variant='terciary' size='md' onClick={() => setCount(count + 1)} >+</Button>
    </>
  )
}

export default App
