import DynamicBreadcrumb from "@/components/navigation/dynamic-breadcrumb";
import { Providers } from "@/context/providers";
import "./globals.css";
import BackToTop from "@/components/button/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex flex-col min-h-screen">
        <Providers>
          <DynamicBreadcrumb />
          {children}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
