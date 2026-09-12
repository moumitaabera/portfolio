// import "./globals.css";

// export const metadata = {
//   metadataBase: new URL("https://moumitabera.vercel.app"),

//   title:
//     "Moumita Bera | Computer Science Engineering Student | Full Stack Developer",

//   description:
//     "Moumita Bera is a Computer Science Engineering student and Full Stack Developer passionate about building modern web applications using React, Next.js, JavaScript, and the MERN stack.",

//   keywords: [
//     "Moumita Bera",
//     "Moumita Bera Portfolio",
//     "Computer Science Engineering Student",
//     "Full Stack Developer",
//     "React Developer",
//     "Next.js Developer",
//     "MERN Stack Developer",
//     "Web Developer",
//   ],

//   authors: [
//     {
//       name: "Moumita Bera",
//     },
//   ],

//   creator: "Moumita Bera",

//   alternates: {
//     canonical: "https://moumitabera.vercel.app",
//   },

//   icons: {
//     icon: "/icon.ico",
//   },

//   openGraph: {
//     title:
//       "Moumita Bera | Computer Science Engineering Student | Full Stack Developer",

//     description:
//       "Portfolio of Moumita Bera, a Computer Science Engineering student and Full Stack Developer.",

//     url: "https://moumitabera.vercel.app",

//     siteName: "Moumita Bera Portfolio",

//     type: "website",

//     locale: "en_IN",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1.0"
//         />

//         <meta
//           name="google-site-verification"
//           content="ImciAI46FOWBvbh__HCZS4wmK1-FzHL9IlQ4oOKaZnM"
//         />
//       </head>

//       <body className="bg-gray-950 text-gray-100">
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "Person",
//         name: "Moumita Bera",
//         url: "https://moumitabera.vercel.app",
//         image: "https://moumitabera.vercel.app/profile.jpg",
//         jobTitle: "Full Stack Developer",
//         description:
//           "Computer Science Engineering student and Full Stack Developer passionate about building modern web applications.",
//         sameAs: [
//           "https://github.com/moumitaabera",
//           "https://www.linkedin.com/in/moumitabera",
//         ],
//       }),
//     }}
//   />
//         {children}
//       </body>
//     </html>
//   );
// }

import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://moumitabera.vercel.app"),

  title:
    "Moumita Bera | Computer Science Engineering Student | Full Stack Developer",

  description:
    "Moumita Bera is a Computer Science Engineering student and Full Stack Developer passionate about building modern web applications using React, Next.js, JavaScript, and the MERN stack.",

  keywords: [
    "Moumita Bera",
    "Moumita Bera Portfolio",
    "Moumita Bera CSE",
    "Moumita Bera Full Stack Developer",
    "Computer Science Engineering Student",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Moumita Bera",
      url: "https://moumitabera.vercel.app",
    },
  ],

  creator: "Moumita Bera",

  alternates: {
    canonical: "https://moumitabera.vercel.app/",
  },

  icons: {
    icon: "/icon.ico",
  },

  openGraph: {
    title:
      "Moumita Bera | Computer Science Engineering Student | Full Stack Developer",

    description:
      "Portfolio of Moumita Bera, a Computer Science Engineering student and Full Stack Developer.",

    url: "https://moumitabera.vercel.app/",

    siteName: "Moumita Bera",

    type: "website",

    locale: "en_IN",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          name="google-site-verification"
          content="ImciAI46FOWBvbh__HCZS4wmK1-FzHL9IlQ4oOKaZnM"
        />

        {/* Advanced SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://moumitabera.vercel.app/#website",
                  url: "https://moumitabera.vercel.app/",
                  name: "Moumita Bera",
                  alternateName: "Moumita Bera Portfolio",
                },

                {
                  "@type": "ProfilePage",
                  "@id": "https://moumitabera.vercel.app/#profile",
                  url: "https://moumitabera.vercel.app/",
                  name:
                    "Moumita Bera | Computer Science Engineering Student | Full Stack Developer",
                  mainEntity: {
                    "@id": "https://moumitabera.vercel.app/#person",
                  },
                },

                {
                  "@type": "Person",
                  "@id": "https://moumitabera.vercel.app/#person",
                  name: "Moumita Bera",
                  alternateName: "moumitabera",
                  url: "https://moumitabera.vercel.app/",
                  image: "https://moumitabera.vercel.app/profile.jpg",
                  jobTitle: "Full Stack Developer",
                  description:
                    "Computer Science Engineering student and Full Stack Developer passionate about building modern web applications.",
                  sameAs: [
                    "https://github.com/moumitaabera",
                    "https://www.linkedin.com/in/moumitabera",
                  ],
                },
              ],
            }),
          }}
        />
      </head>

      <body className="bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  );
}