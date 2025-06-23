
import { supabase } from "@/integrations/supabase/client";

export const useClickTracking = () => {
  const trackClick = async (businessName: string, feedbackType: string) => {
    try {
      const userAgent = navigator.userAgent;
      
      await supabase
        .from('click_events')
        .insert({
          business_name: businessName,
          feedback_type: feedbackType,
          user_agent: userAgent
        });
      
      console.log('Click event tracked successfully');
    } catch (error) {
      console.error('Error tracking click event:', error);
    }
  };

  return { trackClick };
};
