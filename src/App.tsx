import { Layout } from "./components/layout";
import Home from "./pages/home";
import SubscriptionModal from "./components/subscription-modal";
export default function App() {
  return (
    <Layout>
      <Home />

      <SubscriptionModal />
    </Layout>
  );
}
