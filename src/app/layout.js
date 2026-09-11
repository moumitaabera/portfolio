// import "./globals.css";

// export const metadata = {
//   title: "Moumita Bera | Portfolio",
//   icons: {
//     icon: "/icon.ico",
//   },
//   description: "CSE Student Portfolio for Internships and Placements",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//        <head>
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//        </head>
//       <body className="bg-gray-950 text-gray-100">{children}</body>
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
    },
  ],

  creator: "Moumita Bera",

  alternates: {
    canonical: "https://moumitabera.vercel.app",
  },

  icons: {
    icon: "/icon.ico",
  },

  openGraph: {
    title:
      "Moumita Bera | Computer Science Engineering Student | Full Stack Developer",

    description:
      "Portfolio of Moumita Bera, a Computer Science Engineering student and Full Stack Developer.",

    url: "https://moumitabera.vercel.app",

    siteName: "Moumita Bera Portfolio",

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
      </head>

      <body className="bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  );
}