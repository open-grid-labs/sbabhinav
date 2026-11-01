import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSections from "@/components/PageSections";
import type { PageSection } from "@/data/page-content";
import { CONTACT_EMAIL } from "@/constants/contact";
import { OG_IMAGE } from "@/constants/og";

const BASE = "https://sbabhinav.com";
const SLUG = "privacy-policy";
const TITLE = "Privacy Policy | Stories by Abhinav";
const DESCRIPTION =
  "How Stories by Abhinav collects, uses and protects the details you share through our website and contact form, and how to ask us to delete them.";
const LAST_UPDATED = "1 November 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/${SLUG}/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE}/${SLUG}/`,
    images: [OG_IMAGE],
  },
};

const sections: PageSection[] = [
  {
    heading: "Who We Are",
    paragraphs: [
      `Stories by Abhinav is a wedding and portrait photography studio based in Sundernagar, Himachal Pradesh, India. This policy explains what personal information we collect through sbabhinav.com, why we collect it and what we do with it. If you have any questions, email us at [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}).`,
    ],
  },
  {
    heading: "What We Collect",
    paragraphs: [
      "We only collect what you choose to send us. When you fill in the [contact form](/contact/), we receive:",
    ],
    bullets: [
      "your name, phone number and email address",
      "the type of shoot you're interested in",
      "your event date and location, if you share them",
      "anything you write in your message",
    ],
  },
  {
    heading: "What We Don't Collect",
    paragraphs: [
      "This website doesn't use analytics, advertising trackers or tracking cookies, and we don't build profiles of visitors. You can browse every page without telling us anything about yourself.",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: [
      "We use the details you send to reply to your enquiry, check our availability, prepare a quote and, if you book with us, plan and deliver your shoot. We don't sell, rent or share your information with anyone for marketing, and we won't add you to a mailing list.",
    ],
  },
  {
    heading: "Services That Handle Your Data",
    paragraphs: [
      "We rely on a few trusted services to run this website. Each one handles only the data it needs:",
    ],
    bullets: [
      "**Formspree** receives contact form submissions and forwards them to our email inbox. Formspree is based in the United States, so your submission may be processed there.",
      "**Gmail** (Google) is where enquiries arrive and where we reply to you.",
      "**GitHub Pages** hosts this website. Like most web hosts, it may log basic technical details such as your IP address to keep the site secure and running.",
      "**YouTube** provides the films embedded on some pages. We use YouTube's privacy-enhanced mode, so YouTube doesn't set cookies until you press play. Once you play a film, YouTube's own privacy policy applies.",
    ],
  },
  {
    heading: "How Long We Keep It",
    paragraphs: [
      "We keep enquiry details only for as long as we need them to respond to you and, if you book with us, to manage your booking and keep our business records. You can ask us to delete your details at any time.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      `You can ask us to show you the personal information we hold about you, correct it, or delete it. You can also withdraw your consent for us to use it. Email [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}) and we'll respond as soon as we can. If you have a concern about how we've handled your information, write to us at the same address and we'll look into it.`,
    ],
  },
  {
    heading: "Photos on This Website",
    paragraphs: [
      `The photographs and films on this website are from our real client shoots. If you appear in any of them and would like a photo or film removed, email [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}) and we'll take it down.`,
      "All photographs on this website are the copyright of Stories by Abhinav. Please don't copy, download or reuse them without our written permission.",
    ],
  },
  {
    heading: "Links to Other Websites",
    paragraphs: [
      "Our pages link to other websites, such as WedMeGood, Instagram and Google reviews. Those sites have their own privacy policies, and we aren't responsible for how they handle your information.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "If we change how we handle personal information, we'll update this page and the date at the top.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-40 pb-8 px-6 bg-[var(--color-background)] text-center">
        <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase">
          Legal
        </span>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
          Privacy Policy
        </h1>
        <p className="text-white/50 text-sm">Last updated {LAST_UPDATED}</p>
      </section>

      <section className="px-6 pb-24 bg-[var(--color-background)]">
        <PageSections sections={sections} />
      </section>

      <Footer />
    </main>
  );
}
