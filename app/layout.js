import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GlobalContext } from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quizmate",
  description: "Solution to Math Problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} lg:p-5 sm:p-2 sm:pb-10`}>
        <GlobalContext>
          <Navbar />
          {children}
        </GlobalContext>
      </body>
    </html>
  );
}
