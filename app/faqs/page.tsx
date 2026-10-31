import { Metadata } from "next";
import FaqPage from "../../components/FaqPage";
export const metadata: Metadata = {
  title: "Frequently asked questions | Pwani Innovators",
};
export default function Page() {
  return <FaqPage />;
}
