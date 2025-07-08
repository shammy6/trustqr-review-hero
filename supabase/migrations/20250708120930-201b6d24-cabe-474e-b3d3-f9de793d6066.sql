-- Add plan tracking columns to users table
ALTER TABLE public.users 
ADD COLUMN plan_tier TEXT DEFAULT 'free' CHECK (plan_tier IN ('free', 'premium', 'vip')),
ADD COLUMN plan_expiry TIMESTAMP WITH TIME ZONE DEFAULT NULL;

-- Create index for efficient plan queries
CREATE INDEX idx_users_plan_tier ON public.users(plan_tier);
CREATE INDEX idx_users_plan_expiry ON public.users(plan_expiry);