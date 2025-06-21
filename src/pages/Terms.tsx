
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="leading-relaxed">
                These Terms govern your use of TrustQR. By accessing the site or app, you agree to be bound by them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Service</h2>
              <p className="leading-relaxed mb-4">You may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Abuse or manipulate feedback results</li>
                <li>Impersonate others or submit false reviews</li>
                <li>Use the platform for illegal or unethical conduct</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="leading-relaxed">
                All designs, logos, and technology used by TrustQR are the property of GooWeby.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Service</h2>
              <p className="leading-relaxed">
                We may update or change features at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">
                GooWeby is not liable for loss or damage from misuse, service interruptions, or third-party content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="leading-relaxed">
                These terms are governed by the laws of <strong>India (Uttar Pradesh jurisdiction)</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="leading-relaxed">
                For questions about these terms, email us at: <a href="mailto:gooweby@gmail.com" className="text-primary hover:underline">gooweby@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
