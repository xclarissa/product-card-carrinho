import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../button";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  it("should render button with children", () => {
    render(<Button>Salvar</Button>); 
    expect(screen.getByRole('button', { name: /Salvar/i })).toBeInTheDocument()
  });

  it("button disabled", () => {
    render(<Button disabled>Click</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it("should render with variant and big size", () => {
    render(<Button variant="primary" size="lg">Grande</Button>)
    const button = screen.getByRole('button', { name: /grande/i })
    expect(button).toHaveClass("primary")
    expect(button).toHaveClass("lg")
  })

  it("should test onclick event", () => {
    const mockClick = jest.fn();
    render(<Button onClick={mockClick}>Click</Button>)
    expect
  })
  
});
