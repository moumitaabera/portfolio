import "./globals.css";

export const metadata = {
  title: "Moumita Bera | Portfolio",
  icons: {
    icon: "/icon.ico",
  },
  description: "CSE Student Portfolio for Internships and Placements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       </head>
      <body className="bg-gray-950 text-gray-100">{children}</body>
    </html>
  );
}
