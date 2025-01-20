import "./globals.css";
import Head from "next/head";

export const metadata = {
  title : 'Premier Public Adjusters | Claims Assistance Experts',
  description : 'Premier Public Adjusters specializes in helping clients maximize their insurance claims. With years of experience, we ensure fair and accurate settlements for property damage.',
  url : 'https://premierpa.claims/',
  image :'https://premierpa.claims/premier.jpg', // Replace with the actual image URL
  keywords : [
    'Premier Public Adjusters',
    'insurance claims assistance',
    'property damage claims',
    'public adjusters near me',
    'insurance settlement help'
  ],
};


export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Premier Public Adjusters",
    "url": "https://premierpa.claims/",
    "logo": "https://premierpa.claims/logo.jpg",
    "sameAs": [
      "https://www.facebook.com/premierpa",
      "https://twitter.com/premierpa"
    ],
  };
  
  return (
    <html lang="en" data-theme="luxury">
      <Head>
        <title>{metadata.title}</title>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <link rel="canonical" href={metadata.url} />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
