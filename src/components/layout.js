import Header from "./Atomic/molecules/Header";
import Footer from "./Atomic/molecules/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
