import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Layout from "./Layout/Layout";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photoObj = [
  { src: "./images/bigsur.jpg", width: 1080, height: 780 },
  { src: "./images/grad.jpg", width: 1080, height: 1620 },
  { src: "./images/lily.jpg", width: 1080, height: 720 },
  { src: "./images/lotus.jpg", width: 1080, height: 720 },
  { src: "./images/noon.jpg", width: 1080, height: 720 },
  { src: "./images/om.jpg", width: 720, height: 1080 },
  { src: "./images/pdx.jpg", width: 720, height: 1080 },
  { src: "./images/hike.jpeg", width: 1080, height: 850 },
  { src: "./images/photo.jpg", width: 1080, height: 720 },
  { src: "./images/rainbow.jpg", width: 1080, height: 720 },
  { src: "./images/redworld.jpg", width: 1080, height: 720 },
  { src: "./images/sf.jpg", width: 1080, height: 720 },
  { src: "./images/sunsett.jpg", width: 1080, height: 720 },
  { src: "./images/tiburon.jpg", width: 1080, height: 720 },
  { src: "./images/water.jpg", width: 1080, height: 720 },
  { src: "./images/flowers.jpeg", width: 720, height: 1080 },
];

const photos = photoObj.map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: photo.src,
      width: breakpoint,
      height,
    };
  }),
}));
console.log(photos);
const Animation = () => {
  const blackBox = {
    initial: {
      width: "100%",
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        // when: "afterChildren",
        duration: 5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const textContainer = {
    initial: {
      opacity: 1,
      // bottom: 0,
      height: "100%",
    },
    animate: {
      height: 0,
      // bottom: 0,
      opacity: 0,
      transition: {
        duration: 10,
        ease: [0.86, 0.3, 0.1, 1],
        // when: "afterChildren",
      },
    },
  };

  const text = {
    initial: {
      y: 0,
    },
    animate: {
      y: 200,
      height: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    transition: {
      opacity: { ease: "linear" },
      layout: { duration: 0.3 },
    },
  };
  const InitialTransition = () => {
    return (
      <div>
        <motion.div
          style={{ width: "100%", height: 100 }}
          initial="initial"
          animate="animate"
          variants={blackBox}
          onAnimationStart={() =>
            document.body.classList.add("overflow-hidden")
          }
          onAnimationComplete={() =>
            document.body.classList.remove("overflow-hidden")
          }
        >
          <motion.div
            variants={textContainer}
            className="absolute items-center flex"
            style={{
              //   display: "flex",
              overflow: "scroll",
              //   background: "red",
              //   justifyContent: "center",
              alignItems: "center",
            }}
            onAnimationStart={() =>
              document.body.classList.add("overflow-hidden")
            }
            // onAnimationComplete={() =>
            //   document.body.classList.remove("overflow-hidden")
            // }
          >
            <PhotoAlbum photos={photos} layout="masonry" />
          </motion.div>
        </motion.div>
      </div>
    );
  };
  return (
    <Layout>
      <motion.section exit={{ opacity: 0 }}>
        <InitialTransition />
        <Home />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
      </motion.section>
    </Layout>
  );
};

export default Animation;
