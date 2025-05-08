import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SmileDental - Family Dentist in București',
  description: 'Professional dental care for your entire family. Services include general dentistry, cosmetic procedures, orthodontics, and pediatric dentistry.',
  keywords: 'dentist, family dentist, dental care, București, dental services, cosmetic dentistry, orthodontics',
  authors: [{ name: 'SmileDental' }],
  openGraph: {
    title: 'SmileDental - Family Dentist in București',
    description: 'Professional dental care for your entire family. Book your appointment today!',
    url: 'https://smiledental.ro',
    siteName: 'SmileDental',
    images: [
      {
        url: '/img/jonathan-borba-W9YEY6G8LVM-unsplash.jpg',
        width: 1200,
        height: 630,
        alt: 'SmileDental - Family Dentist in București',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        {/* Leaflet marker icons fix */}
        <Script id="leaflet-marker-fix" strategy="afterInteractive">
          {`
            (function() {
              if (typeof window !== 'undefined' && typeof L !== 'undefined') {
                delete L.Icon.Default.prototype._getIconUrl;
                L.Icon.Default.mergeOptions({
                  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
                  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                });
              }
            })();
          `}
        </Script>
        
        {/* Structured data for local business */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'SmileDental',
              image: '/img/jonathan-borba-W9YEY6G8LVM-unsplash.jpg',
              '@id': 'https://smiledental.ro',
              url: 'https://smiledental.ro',
              telephone: '0720123123',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Strada Maria Rosetti 26A',
                addressLocality: 'București',
                postalCode: '020487',
                addressCountry: 'RO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 44.4396,
                longitude: 26.1063,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              sameAs: [
                'https://facebook.com/smiledental',
                'https://instagram.com/smiledental',
                'https://twitter.com/smiledental',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}