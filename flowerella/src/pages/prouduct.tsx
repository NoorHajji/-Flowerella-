import { useState } from "react";
import "../product.css";
import Rosee from "../assets/img/m.jpeg";
import Rose1 from "../assets/img/v.jpeg";
import Rose2 from "../assets/img/vv.jpeg";
import Rose3 from "../assets/img/cc.jpeg";
import Rose4 from "../assets/img/n.jpeg";
import Rose5 from "../assets/img/vvv.jpeg";


interface Product {
  name: string;
  price: number;
  img: string;
}


interface CartItem extends Product {
  qty: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const products: Product[] = [
    { name: "Pink Tulips", price: 30.99, img: Rosee },
    { name: "Phalaenopsis Orchid", price: 38.99, img: Rose1 },
    { name: "Lavender", price: 35.99, img: Rose2 },
    { name: "Yallow Lilie", price: 34.99, img: Rose3 },
    { name: "Madagascar Jasmine", price: 32.99, img: Rose4 },
    { name: "Daisies", price: 39.99, img: Rose5 },
  ];

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.name === product.name);
      return exist
        ? prev.map((p) =>
            p.name === product.name ? { ...p, qty: p.qty + 1 } : p
          )
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const changeQty = (index: number, qty: number | string) => {
    const value = Number(qty);
    if (value <= 0) {
      setCart((prev) => prev.filter((_, i) => i !== index));
    } else {
      setCart((prev) =>
        prev.map((p, i) => (i === index ? { ...p, qty: value } : p))
      );
    }
  };

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div>
      <div className="banner">
        <h1>
          <span className="latest">Latest Product</span>
        </h1>
      </div>

      <div className="products">
        {products.map((p, i) => (
          <div className="product" key={i}>
            <img src={p.img} alt={p.name} className="product-img" />
            <h3>{p.name}</h3>
            <p>{p.price} $</p>
            <button onClick={() => addToCart(p)}>Add To The Cart</button>
          </div>
        ))}
      </div>

      <h2>🛒 Cart</h2>
      <div className="cart">
        {cart.map((item, idx) => (
          <div className="cart-item" key={idx}>
            <span>
              {item.name} - {item.price} $
            </span>
            <input
              type="number"
              value={item.qty}
              min={1}
              onChange={(e) => changeQty(idx, e.target.value)}
            />
            <button onClick={() => changeQty(idx, 0)}>✖</button>
          </div>
        ))}
      </div>

      <div className="total">Total: {total.toFixed(2)} $</div>

      <button
        className="checkout"
        onClick={() => alert("Order completed 🌷")}
      >
        Complete Order
      </button>
    </div>
  );
}

export default App;