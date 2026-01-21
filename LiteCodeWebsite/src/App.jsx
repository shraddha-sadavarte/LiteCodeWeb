import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import PublicRouteGuard from "./routes/PublicRoute";
import AdminProtectedRoute from "./routes/AdminRouteGuard";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16">
        <Routes>

          {/* PUBLIC */}
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* PUBLIC BUT NAVIGATION-ONLY */}
          <Route path="/about" element={<PublicRouteGuard><About /></PublicRouteGuard>} />
          <Route path="/services" element={<PublicRouteGuard><Services /></PublicRouteGuard>} />
          <Route path="/contact" element={<PublicRouteGuard><Contact /></PublicRouteGuard>} />
          <Route path="/careers" element={<PublicRouteGuard><Careers /></PublicRouteGuard>} />

          {/* ADMIN */}
          <Route
            path="/admin-dashboard"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
