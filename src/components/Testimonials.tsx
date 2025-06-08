
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Martinez",
      business: "Bloom Cafe",
      location: "Austin, TX",
      quote: "We went from getting 2-3 bad reviews per month to almost none. When customers do have issues, we fix them before they leave. Our Google rating went from 3.8 to 4.7 stars.",
      rating: 5
    },
    {
      name: "Mike Chen",
      business: "FitZone Gym",
      location: "Seattle, WA",
      quote: "TrustQR saved our reputation. We caught a billing issue that would've resulted in 20+ angry reviews. Instead, we fixed it and got thank-you messages.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      business: "Elegant Nails Salon",
      location: "Miami, FL",
      quote: "Setting up took 10 minutes. Now we get 5x more positive Google reviews and catch problems immediately. It's like having a reputation manager working 24/7.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Local business owners are protecting their reputation and boosting their reviews with TrustQR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-card border rounded-lg px-6 py-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">4.9/5 Average Rating</div>
              <div className="text-sm text-muted-foreground">From 200+ business owners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
