import Layout from "@/components/Layout";
import "../../styles/globals.css";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
export const metadata = {
  title: "ECommerce Vendor Portal",
  description: "ECommerce vendor portal",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Layout>{children}</Layout>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
