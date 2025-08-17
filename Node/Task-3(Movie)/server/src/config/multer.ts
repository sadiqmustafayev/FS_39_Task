import multer from "multer";


const storage = multer.diskStorage({})

const store = multer({storage})

export { store }