"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

function SignIn() {
  return (
    <div className="grid h-screen place-items-center ">
      <div className="text-white text-center">
        <Image
          src="/chatgpt.webp"
          width={40}
          height={40}
          className="m-auto pb-2"
          alt="شعار موقع الذكاء الإصطناعي"
        />
        <p className="pb-2 text-lg">سجل دخولك لتتمكن من إستخدام البرنامج</p>
        <button
          onClick={() => signIn()}
          //^ In react onClick is an event handler, it expects a function to be passed as its handler. By using an arrow function (() => signIn()), you create an anonymous function that will be executed when the button is clicked. So in short: Always use an arrow function for onClick in react!

          className="bg-gptgreend rounded p-2 font-bold text-sm"
        >
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
}

export default SignIn;
