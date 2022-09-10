import React from "react";
import { useSession } from "next-auth/react";
import App from "../src/App.mjs";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <App />
        <p>Signed in as {session.user.email}</p>
      </>
    );
  }

  return <a href="/api/auth/signin">Sign in</a>;
}
