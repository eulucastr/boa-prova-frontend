import React from "react";

export default function Home() {
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button>
        <a href="http://localhost:3333/oauth2/google">
            Google Login
        </a>
      </button>
    </div>
  );
}
