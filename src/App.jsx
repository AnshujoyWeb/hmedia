import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  // count = variable / setcount = function / count = 0 intialize
  const [count, setcount] = useState(2);
  // const [new , setnew] = useState(0)
  return (
    <>
      <Navbar />
      <main>
        <h1 className="heading">Thats my Profesional startup</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
