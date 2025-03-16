import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Workstation, Contact, Resume, NotFound } from "../pages";
import { Navbar, Footer } from "../components";

const AppRoutes = () => (
  <Router>
    <Navbar />
    <main className="pt-16 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/workstation" element={<Workstation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default AppRoutes;
