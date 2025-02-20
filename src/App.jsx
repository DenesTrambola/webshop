import { Route, Routes } from "react-router-dom";
import { MainLayout, EmptyLayout } from "./layouts";
import { Category, Home, Login, NotFound, Register, Cart } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      <Route element={<EmptyLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
