# 🛍️ Product Card com Carrinho – React + TypeScript + Styled Components

Este é um mini-projeto criado para fins de prática: **React**, **TypeScript**, **Styled Components**, **CSS-in-JS**, **GitFlow** e **testes automatizados com React Testing Library e Jest**.

O projeto simula um **card de produto** com botão de "Adicionar ao carrinho", incluindo:
- Estilização responsiva
- Estilo dinâmico baseado na disponibilidade do produto
- Lógica de carrinho com Context API
- Testes unitários básicos

---

<!-- ## 📸 Preview

> ⚠️ *[Inserir aqui um gif, print ou link da interface após iniciar o projeto]*

--- -->

## 🚀 Tecnologias utilizadas

- React
- TypeScript
- Styled Components
- Context API
- Jest
- React Testing Library
- Git e GitFlow

---

## 📁 Estrutura do projeto
```bash
src/
├── contexts/
│   └── CartContext/
│       ├── index.tsx
│       └── CartContext.test.tsx 
├── components/
│   ├── ProductCard/
│   │   ├── index.tsx
│   │   └── ProductCard.test.tsx
│   ├── AddToCartButton/
│   │   ├── index.tsx
│   │   └── AddToCartButton.test.tsx
│   └── ProductImage/
│       ├── index.tsx
│       └── ProductImage.test.tsx
│   
├── styles/
│   ├── theme.ts
│   └── global.ts
│
├── App.tsx
└── main.tsx
```
---

## 🧭 Como rodar o projeto localmente
1 - Clone o repositório:

git clone https://github.com/seu-usuario/product-card.git

2 - Instale as dependências:
 
npm install
# ou
yarn install

3 - Inicie o servidor local:

npm start
# ou
yarn start


## 🧪 Testes automatizados

Os testes foram escritos com **React Testing Library** e **Jest** para validar:

- Renderização correta do componente
- Comportamento do botão (ativado/desativado)
- Ação ao clicar em “Adicionar ao carrinho”

Para rodar os testes:

```bash
npm test
# ou
yarn test

---
