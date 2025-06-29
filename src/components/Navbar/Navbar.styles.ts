import styled from "styled-components";

export const NavContainer = styled.div`
    width: 100vw; 
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }

`

export const Logo = styled.h1`
    font-size: 1.5rem;
`

export const SearchInput = styled.input`
  flex: 1;
  max-width: 400px;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  outline: none;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-weight: bold;
`;