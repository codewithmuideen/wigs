import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Delivery Policy" };

export default function DeliveryPage() {
  return (
    <LegalPage
      title="Delivery Policy"
      intro="We deliver across the United Kingdom, including England, Scotland, Wales and Northern Ireland."
      sections={[
        {
          heading: "Delivery Times",
          body: [
            "Standard delivery typically arrives within 2 to 4 working days from dispatch. Express delivery options will be available at checkout for faster arrival.",
          ],
        },
        {
          heading: "Delivery Costs",
          body: [
            "Delivery is free on all orders over £150. Orders below this threshold will show delivery costs at checkout based on your location and chosen speed.",
          ],
        },
        {
          heading: "Order Tracking",
          body: [
            "Once your order is dispatched, you will receive tracking information by email. You can also check your order status on our Track Order page.",
          ],
        },
        {
          heading: "Delayed or Missing Deliveries",
          body: [
            "If your delivery is delayed beyond the expected window, please contact our support team and we will investigate with our courier partner on your behalf.",
          ],
        },
      ]}
    />
  );
}
