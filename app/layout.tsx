import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Arda Özyiğit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
