"use client";

import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { client } from "@/lib/supabase/client";

const SignInWithOAuth = () => {
  const [session, setSession] = useState<Session | null>(null);

  const checkLogin = async () => {
    const supabase = client();
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    if (error) {
      console.error("Auth 정보 조회 에러:", error.message);
    } else {
      console.log("Auth 정보:", session);
      setSession(session);
    }
  };

  const handleSignOut = async () => {
    const supabase = client();
    await supabase.auth.signOut();
    setSession(null);
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const handleGithubSignIn = async () => {
    const supabase = client();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/note`,
      },
    });

    if (error) {
      console.error("OAuth 로그인 에러:", error.message);
    }
  };

  return (
    <div>
      {session ? (
        <Button onClick={handleSignOut}>Sign out</Button>
      ) : (
        <Button onClick={handleGithubSignIn}>Sign in with Github</Button>
      )}
    </div>
  );
};

export default SignInWithOAuth;
