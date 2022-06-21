import { useState } from "react";
import { supabase } from "../lib/initSupabase";

export default function Login(props: { login: boolean; onLogout: any }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  let login = props.login;
  let onLogout = props.onLogout;

  const handleLogout = async () => {
    try {
      let { error } = await supabase.auth.signOut();

      if (error) throw error;
      else onLogout();
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      let { user, error } = await supabase.auth.signIn({ provider: "google" });
      //        setUser(user)
      if (error) throw error;
      //       alert('Check your email for the login link!')
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-20 ">
      <button onClick={(e) => { e.preventDefault(); login ? handleLogout() : handleLogin(); }}
          className="text-white bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:outline-none
            focus:ring-blue-300 rounded-lg text-base w-full h-full text-center mr-3 md:mr-0
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={loading}>
        <span>{login ? "Logout" : "Login"}</span>
      </button>

    </div>
  );
}