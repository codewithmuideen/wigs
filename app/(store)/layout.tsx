import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import SearchOverlay from "@/components/layout/SearchOverlay";
import CartDrawer from "@/components/cart/CartDrawer";
import LoginModal from "@/components/auth/LoginModal";
import CookieConsent from "@/components/ui/CookieConsent";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <MobileNav />
      <SearchOverlay />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
      <LoginModal />
      <CookieConsent />
    </>
  );
}
