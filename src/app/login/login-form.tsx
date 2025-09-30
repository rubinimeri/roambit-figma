"use client"

import
  React, {
  FormEvent,
  useState
} from 'react';
import Input from "@/components/ui/input";
import { redirect } from "next/navigation";
import { sleep } from "@/lib/utils";
import {clsx} from "clsx";
import useIsScreenMobile from "@/hooks/use-is-screen-mobile";

const exampleData = {
  email: "johndoe@gmail.com",
  password: "123456",
}

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const isScreenMobile = useIsScreenMobile();

  const numAsterisks = "*".repeat(password.length)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    await sleep(1000);

    if (email === exampleData.email && password === exampleData.password) {
      redirect('/dashboard')
    }

    setLoading(false);
    setError("Şifre yanlış. Tekrar deneyin.")
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    const masked = e.target.value;
    const maskedLength = masked.length;

    if (maskedLength < password.length) {
      const diff = password.length - maskedLength;
      setPassword((prev) => prev.slice(0, -diff));
    } else if (maskedLength > password.length) {
      const lastChar = e.nativeEvent as InputEvent;
      if (lastChar.data) {
        setPassword((prev) => prev + lastChar.data);
      }
    }
  };
  return (
    <form className={"grid gap-8"} onSubmit={onSubmit}>
      <div className={"grid gap-4"}>
        <Input
          value={email}
          className={"pr-4"}
          LeftIcon={
            <img
              src="/login/email.png"
              alt="email"
              aria-hidden="true"
              className="w-5 h-5 pointer-events-none"
            />
          }
          RightIcon={
            isScreenMobile &&
            <div className={"flex items-center gap-3"}>
              <span className={"h-[19px] w-0 border border-slate-200"}></span>
              <p className={"leading-none self-end text-[15px]"}>Düzenle</p>
            </div>
          }
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name={"email"}
          placeholder={"Email *"}/>

        <Input
          className={clsx(error && "border-red-500 text-red-500 focus-within:border-red-500 placeholder:text-red-500")}
          LeftIcon={
            <img
              src={`${error ? "/login/red-key.png" : "/login/key.png"}`}
              alt="email"
              aria-hidden="true"
              className="w-5 h-5 pointer-events-none"
            />
          }
          RightIcon={
            <img
              src={`${error ? "/login/red-view-off.png" : "/login/view-off.png"}`}
              alt="view password"
              aria-hidden="true"
              className="w-5 h-5 pointer-events-none shrink-0"
            />
          }
          value={numAsterisks}
          onChange={handlePasswordChange}
          type="text"
          name={"password"}
          placeholder={"Password *"}
          autoComplete="off"
        />
        {error && <span className={"text-red-500 text-[13px] h-4"}>{error}</span>}
        <a href={"#"} className={"text-slate-600 text-[13px] text-right"}>Şifremi Unuttum</a>
      </div>
      <button
        className={"bg-primary py-3 px-8 rounded-2xl font-medium cursor-pointer h-11 hover:opacity-90"}
        type="submit">
        {loading ?
          <img src="/login/loading.png" width={24} alt="loading" className={"animate-spin mx-auto"}/> :
          "Giriş Yap"}
      </button>
    </form>
  );
}