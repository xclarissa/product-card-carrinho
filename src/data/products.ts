export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Fone de Ouvido Bluetooth',
    price: 199.90,
    imageUrl: 'https://static.nagem.com.br/util/artefatos/produtos/n/160x160/900641685035654/581232.jpg?s=s',
    isAvailable: true,
  },
  {
    id: 2,
    title: 'Smartwatch Fitness',
    price: 349.00,
    imageUrl: 'https://static.nagem.com.br/util/artefatos/produtos/n/160x160/821371712952796/597058.jpg?s=s',
    isAvailable: true,
  },
  {
    id: 3,
    title: 'Notebook Gamer RTX',
    price: 5999.00,
    imageUrl: 'https://static.nagem.com.br/util/artefatos/produtos/n/160x160/959731697050521/588717.jpg?s=s',
    isAvailable: false,
  },
  {
    id: 4,
    title: 'Mouse Sem Fio',
    price: 89.90,
    imageUrl: 'https://static.nagem.com.br/util/artefatos/produtos/n/160x160/570561624021365/479179.jpg?s=s',
    isAvailable: true,
  },
  {
    id: 5,
    title: 'Monitor 27” Full HD',
    price: 1099.90,
    imageUrl: 'https://static.nagem.com.br/util/artefatos/produtos/n/160x160/856861742998369/620734.jpg?s=s',
    isAvailable: true,
  },
  {
    id: 6,
    title: 'Notebook Gamer RTX',
    price: 5999.00,
    imageUrl: 'https://static.nagem.com.br/util/artefatos/produtos/n/160x160/959731697050521/588717.jpg?s=s',
    isAvailable: false,
  },
  {
    id: 7,
    title: 'Mouse Sem Fio',
    price: 89.90,
    imageUrl: 'https://static.nagem.com.br/util/artefatos/produtos/n/160x160/570561624021365/479179.jpg?s=s',
    isAvailable: true,
  },
  {
    id: 8,
    title: 'Monitor 27” Full HD',
    price: 1099.90,
    imageUrl: 'https://static.nagem.com.br/util/artefatos/produtos/n/160x160/856861742998369/620734.jpg?s=s',
    isAvailable: true,
  },
];