import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Refunds = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Refund and Cancellation Policy</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Subscription Cancellation</h2>
              <p className="leading-relaxed">
                You can cancel your TrustQR subscription at any time through your account dashboard. Upon cancellation, you will retain access to premium features until the end of your current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Refund Eligibility</h2>
              <p className="leading-relaxed mb-4">We offer refunds in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Technical issues preventing service usage for more than 48 hours</li>
                <li>Billing errors or duplicate charges</li>
                <li>Subscription cancellation within 7 days of initial purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Refund Process</h2>
              <p className="leading-relaxed mb-4">To request a refund:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact us at <a href="mailto:support@trustqr.app" className="text-primary hover:underline">support@trustqr.app</a> within 30 days</li>
                <li>Provide your account details and reason for refund request</li>
                <li>Allow 5-10 business days for processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Non-Refundable Items</h2>
              <p className="leading-relaxed mb-4">The following are not eligible for refunds:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Partial month usage after cancellation</li>
                <li>Downgrade from premium to free plan</li>
                <li>Data export or migration services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Processing Time</h2>
              <p className="leading-relaxed">
                Approved refunds will be processed within 5-10 business days and credited back to your original payment method. Please note that it may take additional time for your bank or credit card company to reflect the refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="leading-relaxed">
                For any questions regarding refunds or cancellations, please contact us at: <a href="mailto:support@trustqr.app" className="text-primary hover:underline">support@trustqr.app</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Refunds;