import { Product } from "../../data/products";

export interface CartItem extends Product { 
    quantity: number;
}

export interface CartContextType {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
    clearCart: () => void;
    getTotal: () => number;
}