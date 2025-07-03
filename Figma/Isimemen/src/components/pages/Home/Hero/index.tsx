import Image from "next/image"
import first from "../../../../../public/images/first-image.png"
import Button from "@/components/ui/Button"

const Hero = () => {
  return (
    <main className="mt-2">
      <div className="relative w-full h-150">
        <Image
          src={first}
          alt="first-image"
          fill
          className="object-cover"
        />
        
        <h1 className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-blue font-bold text-8xl">
          <span className="block">Welcome to</span>
          <span className="block">your reset</span>
        </h1>
      </div>

      <div className="flex flex-col items-center mt-12 px-4 mb-14">
        <h1 className="max-w-2xl text-center text-4xl leading-relaxed mb-6">
          We are a career development & business consultancy for women of color eager to elevate themselves, uncover their life’s purpose, multiply their income, and experience fulfilled lives.
        </h1>

        <Button variant="text" color="white" className="px-6 py-3 text-sm font-medium">
          Discover More
        </Button>
      </div>

        <div className="flex mt-20 mb-40 bg-linen justify-center py-14">
          <h1 className="max-w-3xl text-6xl mx-10">
            We provide purpose-building programs that blend faith, self, and wealth.
          </h1>
        </div>

    </main>

  )
}

export default Hero
