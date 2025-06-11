import React from "react";
import "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="img-background">
      <div className="home-content">
        <lottie-player
          src="https://lottie.host/37fe6f31-f75f-4559-9be1-3be1300714a6/r6PrfLjqZ3.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px", margin: "0 auto" }}
          loop
          autoplay
        ></lottie-player>

        <h1 className="home-title">🍎 Selamat Datang di Fruit App</h1>
        <p className="home-description">
          Deteksi buah secara otomatis dari gambar Anda. Cepat, akurat, dan
          mudah digunakan!
        </p>
        <Link to="/scan" className="home-button">
          Mulai Deteksi Sekarang
        </Link>
      </div>
    </div>
  );
};

export default Home;
