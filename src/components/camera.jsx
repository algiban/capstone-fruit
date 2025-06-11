
import React, { useRef, useState } from "react";
import "../app.css";

const Camera = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState("");
  const [cameraOn, setCameraOn] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      streamRef.current = stream;
      setCameraOn(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setCameraOn(false);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    return canvas;
  };

  const sendToAPI = async () => {
    const canvas = captureImage();
    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append("image", blob, "frame.jpg");

      try {
        const response = await fetch("https://api-capstone-production-5199.up.railway.app/predict", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        setPrediction(result.prediction);
        setConfidence((result.confidence * 100).toFixed(2) + "%");
      } catch (err) {
        console.error("Gagal mengirim gambar ke API:", err);
        setPrediction("Gagal mengirim gambar ke API");
      }
    }, "image/jpeg");
  };

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="400"
        height="300"
        style={{ display: cameraOn ? "block" : "none" }}
      />
      <div>
        {!cameraOn ? (
          <button onClick={startCamera}>Buka Kamera</button>
        ) : (
          <>
            <button onClick={stopCamera}>Tutup Kamera</button>
            <button onClick={sendToAPI}>Deteksi Buah</button>
          </>
        )}
        <p>
          Hasil: <strong>{prediction}</strong>
        </p>
        {confidence && (
          <p>
            Kepercayaan: <strong>{confidence}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Camera;
