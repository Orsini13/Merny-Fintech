import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main>{children}
    <div className="auth-asset">
      <div>
        <Image
          src="/icons/auth-image.svg"
          alt="Auth image"
          width={500}
          height={500}
          className="rounded-l-xl object-contain"
        />
      </div>
    </div>
  </main>
}
