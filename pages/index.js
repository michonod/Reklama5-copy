import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/Search/SearchBar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
export default function Home() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div>
      <Navbar menuToggle={setMenuToggle} />
      <SearchBar
        menuToggleRight={menuToggle}
        setMenuToggleRight={setMenuToggle}
      />
      <Main />
      <Footer />
    </div>
  );
}
