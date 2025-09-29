"use client"

import
  React, {
  FormEvent,
  useState
} from 'react';
import Input from "@/components/ui/input";
import { redirect } from "next/navigation";
import { sleep } from "@/lib/utils";

const exampleData = {
  email: "johndoe@gmail.com",
  password: "123456",
}

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const numAsterisks = "*".repeat(password.length)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    await sleep(1000);

    if (email === exampleData.email && password === exampleData.password) {
      redirect('/dashboard')
    }

    setLoading(false);
    setError("Incorrect email or password!")
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className={"relative"}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name={"email"}
            placeholder={"Email"}/>
          <img
            src="/login/email.png"
            alt="email"
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
          />
        </div>
        <div className={"relative"}>
          <Input
            value={numAsterisks}
            onChange={handlePasswordChange}
            type="text"
            name={"password"}
            placeholder={"Password"}
            autoComplete="off"
          />
          <img
            src="/login/key.png"
            alt="email"
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
          />
          <img
            src="/login/view-off.png"
            alt="email"
            aria-hidden="true"
            className="absolute right-4 w-5 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>
        <a href={"#"} className={"text-slate-600 text-[13px] text-right"}>Şifremi Unuttum</a>
        {error && <p className={"text-red-500"}>{error}</p>}
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