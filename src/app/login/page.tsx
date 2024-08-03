"use client";

import LoginComponent from "@/components/common/LoginComponent";
import Splash from "@/components/common/Splash";

export default function Login() {
  return (
    <main className="w-full h-full px-4 flex flex-col items-center justify-center bg-primary-300">
      <Splash />
      <div className="fixed bottom-16">
        <LoginComponent />
      </div>
    </main>
  );
}
