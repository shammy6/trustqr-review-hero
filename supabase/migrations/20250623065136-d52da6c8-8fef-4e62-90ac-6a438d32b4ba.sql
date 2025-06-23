
-- Create the click_events table for tracking CTA clicks
CREATE TABLE public.click_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT,
  feedback_type TEXT,
  user_agent TEXT,
  timestamp TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.click_events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts only (no read/update/delete access)
CREATE POLICY "Allow public inserts" ON public.click_events 
  FOR INSERT 
  WITH CHECK (true);
