import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Layout from "./pages/Layout";
import Offers from "./pages/Offers";
import Checkout from "./pages/Checkout";
import Explore from "./pages/Explore";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="offers/" element={<Offers />} />
        <Route path="checkout/" element={<Checkout />} />
        <Route path="explore/" element={<Explore />} />
      </Route>
    </Routes>
  );
}

export default App;
