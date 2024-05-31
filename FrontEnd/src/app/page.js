import Image from "next/image";
import Text from "../../data";
import LogoImage from "../../public/logo.png";
import Form  from "@/components/loginform";

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

        <Form />
       </div>

    </main>
  );
}
