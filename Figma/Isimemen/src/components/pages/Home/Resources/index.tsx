import Button from "@/components/ui/Button"

const Resources = () => {
  return (
    <main className="px-6 py-40">
      <h1 className="text-4xl ml-6 mb-12">
        Free resources to level up your career
      </h1>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
        <div className="bg-blue text-black p-8 rounded-lg max-w-md flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-6">Quiz</h2>
          <p className="text-lg mb-6">
            Feeling stuck, frustrated, and overworked in your current role? Like something is missing or not quite right? Take our quiz to uncover the roadblocks and get on the right track.
          </p>
          <div className="flex justify-end pr-6">
            <Button variant="text" className="px-3 py-2 w-fit rounded-full text-sm">
              Take the Quiz
            </Button>
          </div>

        </div>

        <div className="bg-linen text-black p-8 rounded-lg max-w-md flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-6 text-red">Training</h2>
          <p className="text-lg max-w-4/5 mb-6 text-red">
            Take a look at the exact framework our clients have used to increase their salary by $100K, land multiple dream job offers, and exceed lifestyle possibilities.
          </p>
          <div className="flex justify-end pr-6">
            <Button variant="text" className="px-3 py-2 w-fit rounded-full text-sm">
              Watch Now
            </Button>
          </div>

        </div>

        <div className="bg-red text-black p-8 rounded-lg max-w-md flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-6 text-linen">Salary Course</h2>
          <p className="text-lg max-w-4/5 mb-6 text-linen">
          Learn the exact, step-by-step salary negotiation strategies that my clients use to increase their salaries by $50K - $100K
          </p>
          <div className="flex justify-end pr-6">
            <Button variant="text" className="px-3 py-2 w-fit rounded-full text-sm">
              Watch Now
            </Button>
          </div>
        </div>

      </div>
    </main>

  )
}

export default Resources
