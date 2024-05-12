import Image from "next/image";
import LoginImage from "../../public/login.svg";
import DataText from "../../data";

export default function Home() {
  return (
    <main className="flex w-screen h-screen">
       <div className="w-1/2 flex justify-center items-center h-100 border flex-col">
        <h1>{DataText.appName}</h1>
       <Image
      src={LoginImage}
      alt="Login"
      style={{
        width: '50%',
        height: 'auto',
      }}
    />
       </div>
    </main>
  );
}
