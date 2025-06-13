import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-2xl font-semibold">
        Hello to SITE2025
      </main>
      <Footer />
    </div>
  );
}

export default App;
