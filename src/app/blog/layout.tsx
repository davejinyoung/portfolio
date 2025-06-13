import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConstellationsBackground from "../components/ConstellationsBackground";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ConstellationsBackground />
      <main className="flex-grow max-w-2xl mx-auto w-full px-4 scroll-smooth text-green-400 font-mono">
        {children}
      </main>
      <Footer />
    </div>
  );
} 