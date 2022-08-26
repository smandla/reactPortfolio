import "./App.css";
import Animation from "./components/Animation";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <div style={{ height: "100vh" }}>
      <AnimatePresence mode="wait" style={{ height: "100vh" }}>
        <Animation />
      </AnimatePresence>
    </div>
  );
}

export default App;
