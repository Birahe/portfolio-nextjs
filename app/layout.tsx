import Navbar from "@/components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-light_theme">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
