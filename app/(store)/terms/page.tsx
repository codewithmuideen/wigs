import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms govern your use of the Fèyíshọpé Luxe website and any purchase made through it. By placing an order, you agree to the terms outlined below."
      sections={[
        {
          heading: "Orders and Pricing",
          body: [
            "All prices are listed in British pounds and include applicable taxes unless stated otherwise. We reserve the right to correct pricing errors before an order is confirmed.",
          ],
        },
        {
          heading: "Product Availability",
          body: [
            "Products are subject to availability. In the rare case an item becomes unavailable after ordering, we will contact you to offer an alternative or a full refund.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "All content on this website, including images, text and branding, is the property of Fèyíshọpé Luxe and may not be used without permission.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "We aim to provide accurate product information at all times, but we do not guarantee the website will be error free or uninterrupted.",
          ],
        },
      ]}
    />
  );
}
