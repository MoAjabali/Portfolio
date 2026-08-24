import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://moajabali.com";

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />

        <meta
          name="application-name"
          content="Mohammed Aljablai - Portfolio"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="MoAjabali Portfolio"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />

        <link rel="canonical" href={siteUrl} />
        <link
          rel="alternate"
          hrefLang="en"
          href={`${siteUrl}?lang=en`}
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href={`${siteUrl}?lang=ar`}
        />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />

        <meta
          property="og:site_name"
          content="Mohammed Aljablai - Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_YE" />
        <meta property="og:url" content={siteUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MoAjabali" />
        <meta name="twitter:creator" content="@MoAjabali" />

        <meta name="author" content="Mohammed Aljablai" />
        <meta name="copyright" content={`${new Date().getFullYear()} Mohammed Aljablai`} />
        <meta name="owner" content="Mohammed Aljablai" />
        <meta name="url" content={siteUrl} />
        <meta name="identifier-URL" content={siteUrl} />

        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <Script
        id="ld-json-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Mohammed Aljablai - Portfolio",
            alternateName: "MoAjabali Portfolio",
            url: siteUrl,
            inLanguage: ["en", "ar"],
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteUrl}/?s={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      <Script
        id="ld-json-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mohammed Aljablai",
            alternateName: "Mo Ajabali",
            url: siteUrl,
            image: `${siteUrl}/profile.png`,
            email: "mailto:Mohammed.Aljablai@gmail.com",
            telephone: "+967770201264",
            jobTitle: "Full-Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance"
            },
            sameAs: [
              "https://www.linkedin.com/in/moajabali/",
              "https://x.com/MoAjabali",
              "https://github.com/MoAjabali",
              "https://www.facebook.com/MoAjabali"
            ],
            knowsAbout: [
              "Web Development",
              "Frontend Development",
              "Backend Development",
              "React",
              "Next.js",
              "Node.js",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "Laravel",
              "PHP",
              "MySQL",
              "MongoDB"
            ]
          })
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
