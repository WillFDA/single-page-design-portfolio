import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata = {
  title: "Single Page Design - William",
  description: "Front end mentor challenge by William De Azevedo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
