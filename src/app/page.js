import Image from "next/image";
import Text from "../../data";
import LogoImage from "../../public/logo.png";
import Button  from "@/components/button";

export default function Home() {
  return (
    <main className="flex flex-wrap w-screen h-screen">
       <div className="lg:w-1/2 sm:w-full flex justify-center items-center h-100 border flex-col">
       <Image
      src={LogoImage}
      alt="logo"
      style={{
        width: '50%',
        height: 'auto',
      }}
    />
       </div>

       <div className="lg:w-1/2 sm:w-full flex justify-center items-center h-100 border flex-col">
         <h1 className="text-2xl text-center w-full">{Text.login.title}</h1>
         <p className="text-center w-full">{Text.login.subtext}</p>

         <form className="flex flex-col mt-4 gap-2 w-3/4">
         <label for="email">{Text.login.email}</label>
         <input className="h-9" type="email" id="email" name="email" required />
         <label for="password">{Text.login.pass}</label>
         <input className="h-9" type="password" id="password" name="password"  required />
         <Button text={Text.login.button} />
        </form>
       </div>

    </main>
  );
}
