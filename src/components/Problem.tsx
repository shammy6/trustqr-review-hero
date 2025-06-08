
const Problem = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Talk: <span className="text-destructive relative inline-block">
              <span className="relative z-10">Bad Reviews Hurt</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-destructive rounded-full animate-[progress-line_2s_ease-in-out_infinite]"></span>
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            You work hard to make customers happy. But one frustrated guest can undo it all. 
            Don't wait for damage control — stay ahead of it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl transition-transform duration-300 hover:scale-125 hover:animate-bounce cursor-pointer">😰</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Blindsided by Bad Reviews</h3>
              <p className="text-muted-foreground">
                Customers leave 1-star reviews without giving you a chance to fix the problem first.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl transition-transform duration-300 hover:scale-125 hover:animate-bounce cursor-pointer">💸</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Lost Revenue</h3>
              <p className="text-muted-foreground">
                Each bad review can cost thousands in lost customers who never walk through your door.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl transition-transform duration-300 hover:scale-125 hover:animate-bounce cursor-pointer">😤</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Reputation Damage</h3>
              <p className="text-muted-foreground">
                Years of building trust can be ruined by a single bad day and one angry customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
