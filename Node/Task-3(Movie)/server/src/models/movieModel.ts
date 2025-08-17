import { ObjectId, Schema, model } from "mongoose";


interface IFilm {
  title: string;
  description: string;
  author: string;
  fileUrl: string;
  uploadBy: ObjectId;
}

const filmSchema = new Schema<IFilm>({
  title: {type: Schema.Types.String, required: true},
  description: {type: Schema.Types.String, required: true},
  author: {type: Schema.Types.String, required: true},
  fileUrl: {type: Schema.Types.String, required: true},
  uploadBy: {type: Schema.Types.ObjectId, required: true, ref: "users"},  
})


const filmModel = model<IFilm>("film", filmSchema)

export default filmModel