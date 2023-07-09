import React from "react";
import Header from "./components/header/Header";
import SideElements from "./components/sideElements/SideElements";
import HomePage from "./pages/HomePage";
import "./App.css";
import Footer from "./components/Footer/Footer";
import FooterTime from "./components/footerTime/FooterTime";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/brands.min.css"
  integrity="sha512-9YHSK59/rjvhtDcY/b+4rdnl0V4LPDWdkKceBl8ZLF5TB6745ml1AfluEU6dFWqwDw9lPvnauxFgpKvJqp7jiQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/regular.min.css"
  integrity="sha512-WidMaWaNmZqjk3gDE6KBFCoDpBz9stTsTZZTeocfq/eDNkLfpakEd7qR0bPejvy/x0iT0dvzIq4IirnBtVer5A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

function App() {
  return (
    <div className="App">
      <Header />
      <SideElements />
      <HomePage />
      <Footer />
      <FooterTime />
    </div>
  );
}

export default App;
