import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useLocation, useHistory } from "react-router-dom";
import Animation from "./components/Animation";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  // const location = useLocation();

  // const InitialTransition = () => {
  //   return (
  //     <div className="absolute inset-0 flex items-center justify-center">
  //       <motion.div
  //         className="relative z-50 w-full bg-black"
  //         initial="initial"
  //         animate="animate"
  //         variants={blackBox}
  //       />
  //     </div>
  //   );
  // };
  return (
    <div style={{ height: "100vh" }}>
      <AnimatePresence mode="wait" style={{ height: "100vh" }}>
        <Animation />
      </AnimatePresence>
    </div>
  );
}

export default App;
