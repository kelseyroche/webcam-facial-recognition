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

       // Cleanup function to stop the webcam when the component unmounts
       return () => {
         if (videoRef.current && videoRef.current.srcObject) {
           (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
         }
       };
     }, []);

     return <video ref={videoRef} autoPlay />;
   };

   export default WebcamFeed;