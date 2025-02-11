
import './App.css';
import react, { useRef } from 'react';
import { motion, useScroll } from "motion/react"

const Navbar = react.lazy(()=>import('./Components/Navbar'))
const Hero = react.lazy(()=>import('./Components/Hero'))
const About = react.lazy(()=>import('./Components/About'))
const Classes = react.lazy(()=>import('./Components/Classes'))
const Schedule = react.lazy(()=>import('./Components/Schedule'))
const Trainers = react.lazy(()=>import('./Components/Trainers'))
const Pricing = react.lazy(()=>import('./Components/Pricing'))
const Testimonials = react.lazy(()=>import('./Components/Testimonials'))
const JoinHero = react.lazy(()=>import('./Components/JoinHero'))
const Footer = react.lazy(()=>import('./Components/Footer'))
function App() {
  const { scrollYProgress } = useScroll()
  const sectionRef = {
    hero:useRef(null),
    about:useRef(null),
    classes:useRef(null),
  
    trainers:useRef(null),
    pricing:useRef(null),
    testimonials:useRef(null),
   
 
   
  }
  const scrollInto = (sectionName)=>{
    console.log( sectionRef[sectionName].current);
    sectionRef[sectionName].current.scrollIntoView({behavior:"smooth"})
  }
  return (
    <main>
       <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    zIndex:100,
                    left: 0,
                    right: 0,
                    height: 10,
                    borderRadius:10,
                    originX: 0,
                    backgroundColor: "var(--maincolor)",
                }}
            />
      <Navbar scrollInto={scrollInto}/>
      <Hero ref={sectionRef.hero}/>
      <About ref={sectionRef.about}/>
   
      <Classes ref={sectionRef.classes}/>
 

 
     
      <Schedule ref={sectionRef.schedule}/>
      <Trainers ref={sectionRef.trainers}/>
      <Pricing ref={sectionRef.pricing}/>
      <Testimonials ref={sectionRef.testimonials}/>
      <JoinHero ref={sectionRef.joinHero}/>
      <Footer />
    </main>
 
  );
}

export default App;
