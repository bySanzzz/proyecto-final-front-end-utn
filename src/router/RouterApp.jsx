import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { Login } from '../views/Login';
import { Registro } from '../pages/Registro';
import {Documentacion} from '../pages/documentacion'
import { NotFound } from '../views/NotFound';
import { RouteProtected } from '../components/RouteProtected';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouteProtected>
              <Home />
            </RouteProtected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/documentacion" element={<Documentacion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };
