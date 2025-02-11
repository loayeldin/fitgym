import { BadgeCheck } from "lucide-react";
import React from "react";
import { motion } from "motion/react"

function About({ref}) {
  return (
    <div className="container py-28" id="about" ref={ref}>
      <section id="about" className="about grid grid-cols-1 md:grid-cols-2 space-y-2 lg:space-y-8">
      <motion.img
        
        initial={{ opacity: 0, y: 200 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1.2, delay: 0.2 }}
        src="./assets/asset_section.png"
        alt="about-img"
      />
                

      
        <motion.div 
        className="px-4"
        initial={{ opacity: 0, y: 200 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{  ease: "easeOut",duration: 1, delay: 0.4 }}
       
        >
          <h2 className="text-maincolor text-[45px] font-bold leading-[39px] lg:leading-[58px] ">
            Respect Your Body <br /> It’s your Greatest <br /> Asset
          </h2>

          <div className="py-10 lg:py-16">
            <p className="flex gap-x-6 mb-4 md:mb-8 ">
              <BadgeCheck className="text-maincolor" />
              Increase Muscle and Strength
            </p>
            <p className="flex gap-x-6 mb-4 md:mb-8">
              <BadgeCheck className="text-maincolor"/>
              Be Healthier than before
            </p>
            <p className="flex gap-x-6 mb-4 md:mb-8">
              <BadgeCheck className="text-maincolor"/>
              Increase Stamina
            </p>
          </div>
          <div className="flex gap-x-7">
            <button className="bg-maincolor px-6 py-4 rounded-md capitalize">
              join now
            </button>
            <button className="capitalize border border-maincolor px-6 py-4 rounded-md">
              contact us
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
// import React, { useRef, useState, useEffect } from 'react';

// function About() {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [stream, setStream] = useState(null);
//   const [facingMode, setFacingMode] = useState('user'); // Default to front camera
//   const [capturedImage, setCapturedImage] = useState(null); // Store captured image

//   useEffect(() => {
//     startCamera();
//     return () => {
//       // Cleanup on component unmount
//       if (stream) {
//         stream.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, [facingMode]); // Restart camera when facing mode changes or Retake

//   const startCamera = async () => {
//     if (stream) {
//       stream.getTracks().forEach(track => track.stop());
//     }

//     try {
//       const newStream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode },
//       });
//       setStream(newStream);
//       if (videoRef.current) {
//         videoRef.current.srcObject = newStream;
//       }
//     } catch (error) {
//       console.error('Error accessing camera:', error);
//     }
//   };

//   const captureImage = () => {
//     const canvas = canvasRef.current;
//     const video = videoRef.current;

//     if (canvas && video) {
//       const context = canvas.getContext('2d');
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;
//       context.drawImage(video, 0, 0, canvas.width, canvas.height);
//       // Get the captured image as a data URL and set it for preview
//       setCapturedImage(canvas.toDataURL('image/png'));
//     }
//   };

//   const saveImage = () => {
//     if (capturedImage) {
//       const link = document.createElement('a');
//       link.href = capturedImage;
//       link.download = 'captured-image.png';
//       link.click();
//     }
//   };

//   const retakeImage = () => {
//     setCapturedImage(null); // Clear the captured image
//     startCamera(); // Restart the camera feed automatically
//   };

//   const switchCamera = () => {
//     setFacingMode(facingMode === 'user' ? 'environment' : 'user');
//   };

//   return (
//     <div>
//       <h1>React Camera App</h1>
//       {capturedImage ? (
//         <div>
//           <img
//             src={capturedImage}
//             alt="Captured"
//             style={{ width: '100%', border: '2px solid #ccc', borderRadius: '8px' }}
//           />
//           <button onClick={retakeImage}>Retake</button>
//           <button onClick={saveImage}>Save</button>
//         </div>
//       ) : (
//         <div>
//           <video ref={videoRef} autoPlay playsInline style={{ width: '100%' }}></video>
//           <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
//           <div style={{ marginTop: '10px' }}>
//             <button onClick={captureImage}>Capture</button>
//             <button onClick={switchCamera}>Switch Camera</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default About;