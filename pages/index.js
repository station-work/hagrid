import React from "react";
import { useSession } from "next-auth/react";
import { make as App } from "../src/App.bs";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <App />
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return <a href="/api/auth/signin">Sign in</a>;
}
