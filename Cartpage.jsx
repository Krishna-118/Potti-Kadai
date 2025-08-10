import React, { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: " Apple", price: 100, quantity: 2 },
    { id: 2, name: " Milk", price: 50, quantity: 1 },
    { id: 3, name: " Eggs (12)", price: 80, quantity: 1 },
  ]);

  const increment = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCharge = 40;
  const grandTotal = total + deliveryCharge;

  return (
    <div style={styles.page}>
      <div style={styles.cartContainer}>
        <h2 style={styles.title}>🛒 Mycart</h2>
        <hr style={styles.line} />
        {cart.map((item) => (
          <div key={item.id} style={styles.itemRow}>
            <span>{item.name}</span>
            <div style={styles.controls}>
              <button style={styles.qtyBtn} onClick={() => decrement(item.id)}>
                -
              </button>
              <span style={styles.qty}>{item.quantity}</span>
              <button style={styles.qtyBtn} onClick={() => increment(item.id)}>
                +
              </button>
            </div>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <hr style={styles.line} />
        <div style={styles.itemRow}>
          <span>🚚 Delivery Charge</span>
          <span>₹{deliveryCharge}</span>
        </div>
        <h3 style={styles.total}>Total Pay: ₹{grandTotal}</h3>
        <button style={styles.checkoutBtn}>✅ Checkout</button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#fff6f4",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  cartContainer: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "400px",
  },
  title: {
    color: "#a61b4d",
    marginBottom: "10px",
  },
  line: {
    border: "none",
    borderBottom: "1px solid #f3cbd1",
    margin: "10px 0",
  },
  itemRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "8px 0",
    fontSize: "16px",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  qtyBtn: {
    backgroundColor: "#ffb6c1",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#a61b4d",
  },
  qty: {
    minWidth: "20px",
    textAlign: "center",
  },
  total: {
    color: "#a61b4d",
    marginTop: "10px",
  },
  checkoutBtn: {
    backgroundColor: "#ff4d88",
    color: "white",
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "15px",
    fontWeight: "bold",
    fontSize: "16px",
  },
};
