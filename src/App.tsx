import { Layout } from "./components/layout";
import SubscriptionModal from "./components/subscription-modal";
import Home from "./pages/home";

export default function App() {
  return (
    <Layout>
      <Home />
      <SubscriptionModal />
    </Layout>
  );
}
