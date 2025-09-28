import React from "react";
import LoginForm from "@/app/login/login-form";

export default function Page() {
  return (
    <div className={"px-30"}>

      <header className={"mt-10"}>
        <img className={"mx-auto"} src="/logo-light.png" alt="logo" width={144}/>
      </header>

      <main>
        <div className={"mt-[144px]"}>
          <h1 className={"font-semibold text-[32px] text-slate-900 max-w-[816px] text-center mx-auto"}>Reseller’a Hoş Geldin</h1>
          <h2 className={"text-slate-600 max-w-[816px] text-center mx-auto mt-4"}>Hesabınız ile oturum açın.</h2>
        </div>
        <div className={"mx-auto max-w-[480px] mt-[72px] grid gap-8"}>
          <LoginForm />
          <p className={"text-slate-600 text-[13px] mx-auto"}>
            Bir hesabın yok mu? &nbsp;
            <a className={"text-slate-900"} href="#">
              Yeni hesap oluştur
            </a>
          </p>
        </div>
      </main>

      <footer className={"flex gap-7 items-center justify-center mt-[183px] text-[13px]"}>
        <div className={"flex gap-3"}>
          <img src="/login/flag.png" alt="flag" className={"max-w-6 h-[18px] self-center"}/>
          <p className={"flex gap-1 cursor-pointer"}>
            English
            <img src="/login/caret-down.svg" alt=""/>
          </p>
        </div>
        <div className={"flex gap-3"}>
          <img src="/logo-light.png" alt="logo" width={70} className={"h-[15.5px] self-center"} />
          <p>Reseller Portal</p>
          <p>2025</p>
        </div>
      </footer>

    </div>
  );
}