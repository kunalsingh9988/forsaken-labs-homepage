import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import StoryPage from "./pages/StoryPage";
import SciencePage from "./pages/SciencePage";
import ReviewsPage from "./pages/ReviewsPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import GiftCardsPage from "./pages/GiftCardsPage";
import PolicyPage from "./pages/PolicyPage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
    else document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/our-story" element={<StoryPage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gift-cards" element={<GiftCardsPage />} />
          <Route path="/shipping" element={<PolicyPage slug="shipping" />} />
          <Route path="/guarantee" element={<PolicyPage slug="guarantee" />} />
          <Route path="/privacy" element={<PolicyPage slug="privacy" />} />
          <Route path="/terms" element={<PolicyPage slug="terms" />} />
          <Route path="/refund" element={<PolicyPage slug="refund" />} />
          <Route path="/accessibility" element={<PolicyPage slug="accessibility" />} />
          <Route path="/do-not-sell" element={<PolicyPage slug="do-not-sell" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
