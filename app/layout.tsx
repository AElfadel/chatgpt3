import SideBar from "@/components/SideBar";
import "./globals.css";
import { Noto_Naskh_Arabic } from "next/font/google";
import SignIn from "@/components/SignIn";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Provider } from "@/components/Provider";
import ClientProvider from "@/components/ClientProvider";

const noto = Noto_Naskh_Arabic({
  weight: ["variable"],
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
            <div className="flex bg-gptbgl">
              <div className="min-h-screen overscroll-none hidden sm:block">
                <SideBar />
              </div>
              <ClientProvider />
              {/*You add the hot toaster notification as a client component in the client provider component*/}
              <div className="flex-1">{children}</div>
            </div>
          )}
        </Provider>
      </body>
    </html>
  );
}
