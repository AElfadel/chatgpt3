import SideBar from "@/components/SideBar";
import "./globals.css";
import { Noto_Naskh_Arabic } from "next/font/google";
import SignIn from "@/components/SignIn";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { Provider } from "@/components/Provider";

const noto = Noto_Naskh_Arabic({
  weight: ["400", "500", "600"],
  subsets: ["arabic"],
});

export const metadata = {
  title: "الذكاء الإصطناعي",
  description: "قام ببناء الموقع أحمد الفاضل",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="ar" dir="rtl" className="">
      <body className={noto.className}>
        {/*PROVIDER MUST BE INSIDE THE BODY, NOT OUTSIDE*/}
        <Provider session={session}>
          {!session ? (
            <SignIn />
          ) : (
            <div className="flex">
              <div className="min-h-screen overscroll-none hidden sm:block">
                <SideBar />
              </div>
              <div className="flex-1">{children}</div>
            </div>
          )}
        </Provider>
      </body>
    </html>
  );
}
