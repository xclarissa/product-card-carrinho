import styled from "styled-components";

export const Container = styled.div`
    padding: ${({ theme }) => theme.spacing?.md};
    border: 1px solid ${({ theme }) => theme.colors?.border};
    background-color: ${({ theme }) => theme.colors?.white};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes?.lg};
    color: ${({ theme }) => theme.colors?.primary};
`;

export const ProductImage  = styled.img`
    width: 100%;
    max-width: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: ${({ theme }) => theme.spacing?.md};
`;

export const Price = styled.p`
    font-size: ${({ theme }) => theme.fontSizes?.sm};
    color: ${({ theme }) => theme.colors?.text};
`;

export const AddButton = styled.button<{ disabled?: boolean }>`
    padding: ${({ theme }) => theme.spacing?.sm};
    background-color: ${({ disabled, theme }) =>  disabled ? theme.colors?.muted : theme.colors?.primary};
    color: ${({ theme }) => theme.colors?.white};
    border-radius: 4px;
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;