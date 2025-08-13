import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { 
  FaSearch, FaUserCircle, FaHome, FaList, FaShoppingCart, 
  FaUtensils, FaCookieBite, FaBook 
} from "react-icons/fa";

export default function HomePage() {
  const navigate = useNavigate();

  const categories = [
    { name: "All", icon: <FaList /> },
    { name: "Food", icon: <FaUtensils /> },
    { name: "Snacks", icon: <FaCookieBite /> },
    { name: "Stationary", icon: <FaBook /> },
  ];

  const items = [
    { name: "Veg Biryani", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxYfXstvwtZ988b9cR00ehaX30Em9NdXhWQ&s" },
    { name: "Chicken Burger", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8bZpXF9O44IppASLAhG1m9Jx06jUSZyTDQ&s" },
    { name: "Chips Packet", img: "https://www.angroos.com/wp-content/uploads/2023/02/500gm-scaled-1024x1024.jpg" },
    { name: "Pen Set", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveD_5FBz_vUgh1BLTnu7j18xt3V8uc_WoUw&s" },
    { name: "Chocolate", img: "https://rukminim2.flixcart.com/image/704/844/xif0q/chocolate/h/j/6/-original-imah2yr7ycffpx2v.jpeg?q=90&crop=false" },
  ];

  return (
    <div className="homepage">
      {/* Top Bar */}
      <div className="top-bar">
        <button 
          className="icon-btn" 
          onClick={() => navigate("/search")}
        >
          <FaSearch />
        </button>
        <h1>POTTI KADAI</h1>
        <button className="icon-btn">
          <FaUserCircle />
        </button>
      </div>

      {/* Categories */}
      <div className="categories">
        {categories.map((cat, index) => (
          <button key={index} className="category-btn">
            <div className="category-icon">{cat.icon}</div>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Items as Buttons */}
      <div className="items">
        {items.map((item, index) => (
          <button 
            key={index} 
            className="item-card-btn" 
            onClick={() => alert(`You selected ${item.name}`)}
          >
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="nav-btn active"><FaHome /><span>Home</span></button>
        <button className="nav-btn"><FaList /><span>Categories</span></button>
        <button className="nav-btn"><FaShoppingCart /><span>Cart</span></button>
      </div>
    </div>
  );
}
