import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-card">
      <img
        src="/img/pesangon.jpg"
        alt="Ilustrasi Buah"
        className="about-image"
      />
      <h2 className="about-title">Tentang Aplikasi</h2>
      <p className="about-text">
        Aplikasi ini dirancang khusus untuk membantu anak-anak belajar mengenali
        berbagai jenis buah-buahan dengan cara yang menyenangkan dan interaktif.
        Dengan bantuan kamera dan teknologi pengenalan gambar, anak-anak dapat
        langsung melihat dan mengetahui nama buah yang mereka temukan.
      </p>
      <p className="about-text">
        Selain belajar, anak-anak juga diajak bermain sambil mengenal warna,
        bentuk, dan nama buah dalam suasana yang seru. Antarmuka aplikasi dibuat
        sesederhana mungkin agar mudah digunakan, bahkan oleh anak usia dini.
      </p>
      <p className="about-text">
        Aplikasi ini dibangun menggunakan teknologi web modern seperti
        <span> JavaScript modular</span>,{" "}
        <span> SPA (Single Page Application)</span>, dan
        <span> integrasi kamera langsung di browser</span> untuk pengalaman
        belajar yang maksimal.
      </p>
      <div className="about-footer">
        <strong>Developer:</strong> CC25-CF284 🍓🍇🍍
      </div>
    </div>
  );
};

export default About;
