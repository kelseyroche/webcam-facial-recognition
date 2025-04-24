// import React, { useEffect, useRef, useState } from 'react';

// const WebcamFeed: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [streaming, setStreaming] = useState(false);

//   useEffect(() => {
//     const startWebcam = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//           setStreaming(true);
//         }
//       } catch (err) {
//         console.error('Error accessing webcam: ', err);
//       }
//     };

//     if (!streaming) startWebcam();

//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         (videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, [streaming]);

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <video ref={videoRef} autoPlay />
//       <div>
//         <button onClick={() => setStreaming(false)}>Stop Webcam</button>
//         <button onClick={() => setStreaming(true)}>Start Webcam</button>
//       </div>
//     </div>
//   );
// };

// export default WebcamFeed;

import React, { useEffect, useRef } from 'react';

const WebcamFeed: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };

    startWebcam();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="webcam-container">
      <h2>This person wants to hire Kelsey Roche!</h2>
      <video ref={videoRef} autoPlay />
      <div className="links">
        <a href="https://kelseyrocheportfolio.onrender.com/" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a href="https://github.com/kelseyroche" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/kelsey-roche/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default WebcamFeed;