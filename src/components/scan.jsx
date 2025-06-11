import React from "react";
import Camera from "./camera.jsx";

function Scan({ model, labels, result }) {
  return (
    <div className="img-background">
    <div className="scan-container">
      <h1>Deteksi Buah</h1>
      <Camera />
      {result && <p>Hasil: {result}</p>}
    </div>
    </div>
  );
}

export default Scan;
