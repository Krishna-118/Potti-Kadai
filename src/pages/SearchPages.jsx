import React, { useState } from "react";
import "./SearchPages.css";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const navigate = useNavigate();

  const allItems = [
    { name: "Veg Biryani", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxYfXstvwtZ988b9cR00ehaX30Em9NdXhWQ&s" },
    { name: "Chicken Burger", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8bZpXF9O44IppASLAhG1m9Jx06jUSZyTDQ&s" },
    { name: "Chips Packet", img: "https://www.angroos.com/wp-content/uploads/2023/02/500gm-scaled-1024x1024.jpg" },
    { name: "Pen Set", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveD_5FBz_vUgh1BLTnu7j18xt3V8uc_WoUw&s" },
    { name: "Chocolate", img: "https://rukminim2.flixcart.com/image/704/844/xif0q/chocolate/h/j/6/-original-imah2yr7ycffpx2v.jpeg?q=90&crop=false" },
    { name: "Fried Rice", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg" },
    { name: "Pizza", img: "https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8YUdObEwyaG1aQzh4TlRrMk9EWXlOVGM0TmpreE1DNXFjR2N8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page">
      {/* Top Bar */}
      <div className="search-top-bar">
        <button className="icon-btn" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </button>
        <h2>Search</h2>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Search Results */}
      <div className="search-results">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="search-item-card">
              <img src={item.img} alt={item.name} />
              <span>{item.name}</span>
            </div>
          ))
        ) : (
          <p className="no-results">No items found</p>
        )}
      </div>
    </div>
  );
}
