import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const loggedIn = { firstName: 'Adrian', lastName: 'JSM' };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logoo.jpeg" width={30} height={30} alt={"menu icon"} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
      {children}
      </div>
    </main>
  )
}
// async function sleep(millis) {
//   setTimeout(() => {
//     console.log('big dog')
//   }, millis)
// }
// sleep(100);