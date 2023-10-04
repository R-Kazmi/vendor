import { Providers } from "@/redux/provider";
import "../../styles/globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "ECommerce Vendor Portal",
  description: "ECommerce vendor portal",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="h-screen">
        <Providers>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
