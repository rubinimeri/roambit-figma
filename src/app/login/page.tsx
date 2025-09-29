import React from "react";
import LoginForm from "@/app/login/login-form";

export default function Page() {
  return (
    <div className={"max-[600px]:px-6"}>

      <header className={"mt-10"}>
        <img className={"mx-auto"} src="/logo-light.png" alt="logo" width={144}/>
      </header>

      <main>
        <div className={"mt-[144px] h-22"}>
          <h1 className={"font-medium text-[32px] text-slate-900 max-w-[816px] text-center mx-auto"}>Reseller’a Hoş Geldin</h1>
          <h2 className={"text-slate-600 max-w-[816px] text-center mx-auto mt-4"}>Hesabınız ile oturum açın.</h2>
        </div>
        <div className={"mx-auto max-w-[480px] mt-[72px] grid gap-8"}>
          <LoginForm />
          <p className={"text-[13px] mx-auto flex gap-3"}>
            <span className={"text-slate-600"}>Bir hesabın yok mu?</span>
            <a className={"text-slate-900"} href="#">
              Yeni hesap oluştur
            </a>
          </p>
        </div>
      </main>

      <footer className={"flex gap-7 items-center justify-center mt-[257px] mb-[19px] text-[13px]"}>
        <div className={"flex items-end gap-3 w-[99px] h-[18px]"}>
          <img src="/login/flag.png" alt="flag" className={"max-w-6 h-[18px]"}/>
          <p className={"flex gap-1 cursor-pointer h-4 leading-none"}>
            <span className={"self-end text-slate-600"}>English</span>
            <img src="/login/caret-down.svg" alt=""/>
          </p>
        </div>
        <div className={"flex items-end gap-3"}>
          <img src="/logo-light.png" alt="logo" width={70} className={"h-[16px] self-start"} />
          <div className={"flex gap-3 items-center h-[13px]"}>
            <p className={"leading-none"}>Reseller Portal</p>
            <p className={"text-slate-600 leading-none"}>2025</p>
          </div>
        </div>
      </footer>

    </div>
  );
}