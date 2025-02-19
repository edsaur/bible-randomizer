import { useState, useEffect } from "react";
import { supabase } from "../../api/supabase";

export const useFetchUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) console.error("Error fetching session:", error);
      setUser(session?.user || null);
      setIsLoading(false);
    };

    getSession(); // Fetch session on page load

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed:", event, session);
      setUser(session?.user || null);
    });

    return () => authListener?.subscription?.unsubscribe();
  }, []);

  return { user, isLoading };
};
