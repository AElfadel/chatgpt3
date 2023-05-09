import SideBar from "@/components/SideBar";
import "./globals.css";
import { Noto_Naskh_Arabic } from "next/font/google";

const noto = Noto_Naskh_Arabic({
  weight: "400",
  subsets: ["arabic"],
});

export const metadata = {
  title: "الذكاء الإصطناعي",
  description: "قام ببناء الموقع أحمد الفاضل",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="bg-gptbgl overflow-auto">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
