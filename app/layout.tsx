import Navbar from "@/components/navbar";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://ardaozyigit.info",
              "@type": "WebSite",
              name: "Arda Özyiğit",
              url: "https://ardaozyigit.info",
            }),
          }}
        />
      </Head>

      <body className="overflow-x-hidden">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
