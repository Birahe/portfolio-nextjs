import Navbar from "@/components/navbar";
import "./globals.css";
import Script from "next/script";

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
      <Script>
        document.querySelector("meta[name=viewport]").setAttribute('content',
        'width=device-width, initial-scale='+(1/window.devicePixelRatio));
      </Script>
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
