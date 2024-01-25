import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-r from-[#D8D2FC] via-[#FDE2E0] to-[#E0E9F4]">
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </div>
  );
}
