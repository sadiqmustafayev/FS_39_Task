import Image from "next/image"
import Link from "next/link"

import Logo from "../../../../public/images/logo.png"

const Header = () => {
  return (
    <header className="w-full h-16 px-6 py-6 flex justify-between items-start">
      <Link href={"/"} className="flex absolute top-0 left-9 p-10 py-5">
        <Image src={Logo} alt="Logo" width={120} height={40} />
      </Link>

      <div className="flex gap-4 absolute top-0 right-10 p-10 py-7">
        <Link href={"/home"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/work-with-us"}>Work With Us</Link>
        <Link href={"/client-wins"}>Client Wins</Link>
        <Link href={"/employers"}>Employers</Link>
      </div>

    </header>
  )
}

export default Header
