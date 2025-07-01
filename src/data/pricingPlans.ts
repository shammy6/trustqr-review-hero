export interface PricingPlan {
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  popular: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for small businesses starting their reputation journey",
    features: [
      "Unlimited QR feedback links",
      "Basic email feedback alerts",
      "Standard email support",
      "Web dashboard access",
      "Basic analytics insights"
    ],
    buttonText: "Start Free Today",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "VIP",
    price: { monthly: 999, annual: 9592 },
    description: "Enterprise-grade solution for businesses serious about reputation management",
    features: [
      "Everything in Premium Plan",
      "Full custom branding (QR codes + feedback pages)",
      "Comprehensive monthly performance reports",
      "Dedicated account manager & consultation",
      "Priority feature integrations",
      "Advanced analytics dashboard with AI insights",
      "White-label solution options"
    ],
    buttonText: "Start VIP Experience",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Premium",
    price: { monthly: 399, annual: 3192 },
    description: "Advanced tools for growing businesses focused on reputation excellence",
    features: [
      "Everything in Free Plan",
      "AI-powered smart alert system",
      "Advanced feedback analytics & insights",
      "Priority customer support",
      "Custom response templates",
      "Detailed performance reports"
    ],
    buttonText: "Upgrade to Premium",
    buttonVariant: "outline" as const,
    popular: false
  }
];