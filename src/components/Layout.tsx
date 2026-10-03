import { Outlet } from "react-router-dom";
import Header, { AnnouncementBar } from "./Header";
import Footer from "./Footer";
import ChatBubble from "./ChatBubble";

export default function Layout() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <Outlet />
      <Footer />
      <ChatBubble />
    </div>
  );
}
