import Image from "next/image"
import Program1  from "../../../../../public/images/program-1.jpg"
import Program2  from "../../../../../public/images/program-2.jpg"
import Program3  from "../../../../../public/images/program-3.jpg"
import Button from "@/components/ui/Button"


const Program = () => {
  return (
  <main className="py-16 px-4 bg-white mb-10">
  
    <h1 className="text-4xl ml-25 mb-12">Our Programs</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

      <div className="bg-blue rounded-xl p-6 text-center shadow-md">
        <Image
          src={Program1}
          alt="Individuals"
          width={300}
          height={300}
          className="mx-auto object-cover rounded-md mb-5"
        />
        <h2 className="text-lg font-bold mb-4">Individuals</h2>
        <p className="text-sm text-gray-800 mb-6">
          Undervalued and underpaid? Let’s change that. Our career-development program, Fulfilled, is here to provide you with the resources and tools you need to not only go for a higher-paying job, but secure it. We believe it’s already yours.
        </p>
        <Button color="blue" className="text-sm px-6 py-2" variant="text">
          Reimagine Now
        </Button>
      </div>

      <div className="bg-linen rounded-xl p-6 text-center shadow-md">
        <Image
          src={Program2}
          alt="Employers"
          width={300}
          height={300}
          className="mx-auto object-cover rounded-md mb-5"
        />
        <h2 className="text-lg font-bold mb-4">Employers</h2>
        <p className="text-sm text-gray-800 mb-6">
          Through our Fulfilled Work Framework, we advise employers on how to better position employees of color to unlock their potential and take ownership of their careers while increasing retention rates all around.
        </p>
        <Button color="blue" className="text-sm px-6 py-2" variant="text">
          Learn More
        </Button>
      </div>


      <div className="bg-blue rounded-xl p-6 text-center shadow-md">
        <Image
          src={Program3}
          alt="Leaders"
          width={300}
          height={300}
          className="mx-auto object-cover rounded-md mb-5"
        />
        <h2 className="text-lg font-bold mb-4">Leaders</h2>
        <p className="text-sm text-gray-800 mb-6">
          We coach leaders, business owners, and influencers on how to maximize their value, unleash their power, and grow their success. From where we’re looking, there’s no glass ceiling.
        </p>
        <Button color="blue" className="text-sm px-6 py-2" variant="text">
          Explore More
        </Button>
      </div>
  </div>
</main>

  )
}

export default Program
