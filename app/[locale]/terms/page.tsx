import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default async function TermsPage({
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
          <h1>Terms of Service</h1>
          <p>
            These terms govern your use of flows44 services and website.
          </p>
          <h2>Services</h2>
          <p>
            flows44 provides business automation consulting and implementation
            services as described on our website.
          </p>
          <h2>Payment</h2>
          <p>
            Payment terms are established in individual service agreements
            between flows44 and the client.
          </p>
          <h2>Contact</h2>
          <p>For questions about these terms, contact us at hello@flows44.com.</p>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
