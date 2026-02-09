import "./globals.css";
import HeaderLayout from "../component/Header";
import SideBar from "../component/Sidebar";
import Providers from "./providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-[0] p-[0]">
        <Providers>
          <main className="w-[100vw] h-[100vh]">
            <HeaderLayout />
            <div className="flex h-[calc(100vh-50px)]">
              <SideBar />
              {children}
              {process.env.NODE_ENV === "development" && (
                <ReactQueryDevtools initialIsOpen={false} />
              )}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
