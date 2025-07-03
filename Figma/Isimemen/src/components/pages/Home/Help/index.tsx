import Image from "next/image"
import Help1 from "../../../../../public/images/help.jpg"

const Help = () => {
  return (
    <main className="mx-auto py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="w-[600px] h-[600px] relative">
          <Image
            src={Help1}
            alt="Help"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="w-[600px] h-[600px] bg-linen rounded-xl shadow-md flex items-center justify-center p-10">
          <h1 className="text-4xl font-semibold text-center">
            We’re here to help you turn every “no” you’ve ever heard into a {"0"} on your paycheck.
          </h1>
        </div>
      </div>
    </main>



  )
}

export default Help
