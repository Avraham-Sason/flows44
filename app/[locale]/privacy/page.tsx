import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-invert">
          <h1>Privacy Policy</h1>
          <p>
            This privacy policy describes how flows44 collects, uses, and
            protects your personal information.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide when booking a consultation or
            contacting us through our website.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            Your information is used solely to provide our services and
            communicate with you about your automation needs.
          </p>
          <h2>Contact</h2>
          <p>For privacy inquiries, contact us at hello@flows44.com.</p>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
