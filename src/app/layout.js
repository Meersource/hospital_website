import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL('https://www.cheemahospitalcomplex.com'),
  title: {
    default: 'Cheema Hospital Complex — Quality Healthcare Services',
    template: '%s | Cheema Hospital Complex',
  },
  description:
    'Cheema Hospital Complex provides comprehensive healthcare services with 24/7 emergency care, specialist consultations, and advanced medical technology in Daska, Punjab. Best hospitak in Daska',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Cheema Hospital Complex',
    title: 'Cheema Hospital Complex — Quality Healthcare Services',
    description:
      'Comprehensive healthcare in Daska: eyes specialist, emergency, surgery, cardiology, pediatrics, diagnostics and more.',
    images: [
      {
        url: '/file.svg',
        width: 1200,
        height: 630,
        alt: 'Cheema Hospital Complex',
      },
    ],
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheema Hospital Complex — Quality Healthcare Services',
    description:
      'Comprehensive healthcare in Daska: emergency, eyes specialist, surgery, cardiology, pediatrics, diagnostics and more.',
    images: ['/file.svg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
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
