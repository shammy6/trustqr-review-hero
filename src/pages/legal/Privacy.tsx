import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          to="/app" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="leading-relaxed">
                TrustQR, operated by GooWeby, is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your data when using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What We Collect</h2>
              <p className="leading-relaxed mb-4">We collect information such as:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, email, and business name during signup</li>
                <li>Feedback submitted through QR codes</li>
                <li>Metadata from QR scans (device type, time, sentiment)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Data</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Display and analyze customer feedback</li>
                <li>Provide sentiment alerts and personalized dashboards</li>
                <li>Improve app performance and user experience</li>
                <li>Email notifications or service-related updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
              <p className="leading-relaxed mb-4">We use:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Supabase</strong> for authentication, data storage, and session management</li>
                <li><strong>Google/Facebook/Custom Links</strong> for routing review traffic</li>
                <li><strong>Analytics tools</strong> to monitor app usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
              <p className="leading-relaxed">
                We retain user data only as long as necessary for providing services. Users can request data deletion by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="leading-relaxed mb-4">You may request:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access to your data</li>
                <li>Corrections or deletions</li>
                <li>To opt out of specific features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="leading-relaxed">
                For questions or privacy concerns, email us at: <a href="mailto:support@trustqr.app" className="text-primary hover:underline">support@trustqr.app</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;