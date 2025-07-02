import { act, render, renderHook } from "@testing-library/react";
import { CartProvider, useCart } from ".";
import { Product } from "../../data/products";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

const productA: Product = {
    id: 1,
    title: 'SmartTv',
    price: 1500,
    imageUrl: '',
    isAvailable: true,
}

const productB: Product = {
  id: 2,
  title: 'Impressora',
  price: 800,
  imageUrl: '',
  isAvailable: true,
};

describe("Cart Context", () => {
    it("should test addItem function", () => {
        const { result } = renderHook(() => useCart(), { wrapper } )
        
        act(() => {
            result.current.addItem(productA);
        })

        expect(result.current.items).toHaveLength(1);
        expect(result.current.items[0].quantity).toBe(1);
    })

    it("should test removeItem function", () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addItem(productA);
            result.current.addItem(productB);
            result.current.removeItem(productA.id);
        })
        
        expect(result.current.items[0].quantity).toBe(1);
        expect(result.current.items).toHaveLength(1);
    })

    it("should clear cart", () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addItem(productA);
            result.current.addItem(productB);
            result.current.clearCart();
        })

        expect(result.current.items).toHaveLength(0);
    })

    it("should return  getTotal value", () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        act(() => {
            result.current.addItem(productA);
            result.current.addItem(productA);
            result.current.addItem(productB);
        })

        expect(result.current.getTotal()).toBe(3800)
    })
})