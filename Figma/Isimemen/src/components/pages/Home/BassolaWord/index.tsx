import Image from "next/image";
import Global from "../../../../../public/images/global-image.jpg"

import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import Button from "@/components/ui/Button";

const BassolaWord = () => {
  return (
    <main className="py-10 text-center mb-30">
        <div className="bg-linen py-15 px-10">
          <h1 className="text-3xl mb-8">
            Don’t take our word for it.
          </h1>

          <p className="text-5xl max-w-2/4 mx-auto mb-5">
            I just received an offer for a dream job with a significant pay increase at a great company—in the middle of a global pandemic!
          </p>

          <h1 className="mb-20">
            BASSOLA
          </h1>

          <div className="flex gap-5 justify-center">
            <FaCircle className="text-xs"/>
            <FaRegCircle />
            <FaRegCircle />
          </div>
        </div>

        <div>
          <Image src={Global} alt="Word Image" />
        </div>

        <div className="flex flex-col justify-center mt-25 text-center">
          <h1 className="text-6xl w-2/5 mx-auto">
            Your transformation awaits.
          </h1>

          <p className="mt-15 mx-auto text-3xl w-2/5">
            If you’re ready for change, then change is ready for you.
          </p>

          <div className="flex justify-center mt-10">
            <Button color="white" variant="text" className="px-3 py-2 w-fit  rounded-full text-sm">
              {"I'm Ready"}
            </Button>
          </div>

        </div>

    </main>

  )
}

export default BassolaWord
