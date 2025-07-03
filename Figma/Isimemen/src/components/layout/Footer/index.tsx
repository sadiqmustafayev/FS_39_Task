import Link from "next/link"

const Footer = () => {
  return (
    <footer className="container bg-linen">
      <h1 className="px-15 py-15 text-3xl">
        Sign up if you want pure gold in your inbox.
      </h1>

      <div className="flex justify-end px-50 py-10 -mt-30">
        <div className="flex flex-col items-end">
          <h1 className="text-2xl px-22 mb-10">Company</h1>

          <div className="flex flex-col space-y-2">
            <Link href="/about">About</Link>
            <Link href="/fulfilled-coaching-program">Fulfilled Coaching Program</Link>
            <Link href="/client-wins">Client Wins</Link>
            <Link href="/press-media">Press & Media</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <Link href="/brand-design-by-provoke">Brand Design by Provoke</Link>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-end px-10 py-10">
          <h1>© Copyright Isimemen 2022</h1>
      </div>
    </footer>
  )
}

export default Footer
