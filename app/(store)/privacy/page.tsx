import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Fèyíshọpé Luxe respects your privacy. This policy explains what personal information we collect, why we collect it, and how it is used and protected."
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "When you create an account, place an order or contact us, we may collect information such as your name, email address, delivery address, phone number and order history.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use your information to process orders, provide customer support, send order and delivery updates, and, where you have given consent, share marketing communications.",
          ],
        },
        {
          heading: "Sharing Your Information",
          body: [
            "We share limited information with trusted service providers who support order fulfilment, payment processing and delivery, only as needed to provide our service.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "Under UK data protection law, you have the right to access, correct or request deletion of your personal data. Contact us at hello@feyishopeluxe.com to make a request.",
          ],
        },
      ]}
    />
  );
}
