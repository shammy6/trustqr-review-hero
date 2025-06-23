
import { supabase } from "@/integrations/supabase/client";

export const useClickTracking = () => {
  const trackClick = async (businessName: string, feedbackType: string) => {
    try {
      console.log('Starting click tracking...', { businessName, feedbackType });
      
      const userAgent = navigator.userAgent;
      
      const { data, error } = await supabase
        .from('click_events')
        .insert({
          business_name: businessName,
          feedback_type: feedbackType,
          user_agent: userAgent
        })
        .select();
      
      if (error) {
        console.error('Supabase insert error:', error);
        throw error;
      }
      
      console.log('Click event tracked successfully!', data);
      return { success: true, data };
    } catch (error) {
      console.error('Error tracking click event:', error);
      return { success: false, error };
    }
  };

  return { trackClick };
};
