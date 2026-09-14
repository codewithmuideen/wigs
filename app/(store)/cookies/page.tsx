import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="Cookies help our store function correctly and, with your permission, help us understand how it is used so we can improve it."
      sections={[
        {
          heading: "Necessary Cookies",
          body: [
            "These cookies are essential for core functions such as keeping items in your bag and remembering your preferences. They cannot be switched off.",
          ],
        },
        {
          heading: "Analytics Cookies",
          body: [
            "With your consent, analytics cookies help us understand how customers browse and shop so we can improve the experience over time.",
          ],
        },
        {
          heading: "Marketing Cookies",
          body: [
            "With your consent, marketing cookies allow us to show relevant offers and measure the performance of our campaigns.",
          ],
        },
        {
          heading: "Managing Your Preferences",
          body: [
            "You can update your cookie preferences at any time using the Cookie Settings link in the footer of our website.",
          ],
        },
      ]}
    />
  );
}
