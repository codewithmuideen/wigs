import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Returns & Refunds" };

export default function ReturnsPage() {
  return (
    <LegalPage
      title="Returns & Refunds"
      intro="We want you to love what you order. If something is not right, here is how our returns process works."
      sections={[
        {
          heading: "Return Window",
          body: [
            "Unworn items in their original packaging, with hygiene seals intact, can be returned within 14 days of delivery for a refund or exchange.",
          ],
        },
        {
          heading: "How to Start a Return",
          body: [
            "Sign in to your account and select the order you would like to return, or contact our support team with your order reference and reason for return.",
          ],
        },
        {
          heading: "Refund Processing",
          body: [
            "Once your return is received and inspected, refunds are processed within 5 to 7 business days to your original payment method.",
          ],
        },
        {
          heading: "Items That Cannot Be Returned",
          body: [
            "For hygiene reasons, wigs and hair pieces with removed packaging seals, or products that have been worn or altered, cannot be accepted for return.",
          ],
        },
      ]}
    />
  );
}
