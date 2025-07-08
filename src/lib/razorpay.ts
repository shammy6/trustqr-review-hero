// Razorpay integration for TrustQR payments
declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface PaymentOptions {
  amount: number;
  planTier: 'premium' | 'vip';
  userEmail: string;
  userName: string;
  onSuccess: (response: any) => void;
  onFailure: (error: any) => void;
}

// Test mode API keys - replace with live keys for production
const RAZORPAY_KEY_ID = 'rzp_test_1234567890'; // Test key - replace with actual test key

export const initializeRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // Check if Razorpay is already loaded
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const createPayment = async (options: PaymentOptions) => {
  const isLoaded = await initializeRazorpay();
  
  if (!isLoaded) {
    throw new Error('Failed to load Razorpay');
  }

  const paymentOptions = {
    key: RAZORPAY_KEY_ID,
    amount: options.amount * 100, // Amount in paise
    currency: 'INR',
    name: 'TrustQR',
    description: `${options.planTier.toUpperCase()} Plan Subscription`,
    handler: options.onSuccess,
    prefill: {
      email: options.userEmail,
      name: options.userName,
    },
    theme: {
      color: '#22c55e', // Green color matching the theme
    },
    modal: {
      ondismiss: () => {
        options.onFailure({ code: 'PAYMENT_CANCELLED', description: 'Payment cancelled by user' });
      },
    },
  };

  const razorpay = new window.Razorpay(paymentOptions);
  razorpay.open();
};