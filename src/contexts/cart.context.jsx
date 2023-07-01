import { createContext, useState, useEffect } from "react";

const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  toogleCart: () => null,
  isCartOpen: false,
  cartTotal: 0,
  cartItemsCount: 0,
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  let [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === itemId) {
          if (item.quantity === 1) {
            return null; // Remove the item from the cart
          } else {
            return { ...item, quantity: item.quantity - 1 }; // Reduce the quantity
          }
        }
        return item;
      })
      .filter(Boolean); // Filter out null values (removed items)
    setCartItems(updatedCart);
    setCartItemsCount(cartItemsCount - 1);
  };
  const addItemToCart = (productToAdd) => {
    setCartItems([...cartItems, productToAdd]);
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
      console.log("This item exists");
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      console.log("This item doesn't exists");
      const updatedCart = [...cartItems, { ...productToAdd, quantity: 1 }];
      setCartItems(updatedCart);
    }
    setCartItemsCount(cartItemsCount + 1);
  };

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCartTotal(total.toFixed(2));
  }, [cartItems]);

  const toogleCart = (e) => {
    e.preventDefault();
    setIsCartOpen(!isCartOpen);
  };
  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    isCartOpen,
    toogleCart,
    cartTotal,
    cartItemsCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
