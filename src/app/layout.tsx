import "./globals.css";
import Providers from "./providers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="m-0 p-0">
      <body className="flex min-h-screen flex-col m-0 p-0 bg-white">
        <Providers>

          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="flex-1">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />

        </Providers>
      </body>
    </html>
  );
}
