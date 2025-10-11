import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Family Hospital - Quality Healthcare Services",
  description: "Family Hospital provides comprehensive healthcare services with 24/7 emergency care, specialist consultations, and advanced medical technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
