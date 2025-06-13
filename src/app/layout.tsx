import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Source_Code_Pro } from "next/font/google";

const ibmPlexMono = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "300"],
});

export const metadata = {
  title: "Dave Jung",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexMono.className} bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
