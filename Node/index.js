import fetch from "node-fetch";
import mongoose from "mongoose";

/*____________________________________________________*/

mongoose.connect(
  "mongodb+srv://AKASI:awesPz2IJOFLAa3l@akasi.dxn3c.mongodb.net/APIs?retryWrites=true&w=majority"
);
const dataSchema = new mongoose.Schema({
  API: { type: String, required: true },
  Description: { type: String, required: true },
  Link: { type: String, required: true },
  Category: { type: String, required: true },
});

const Data = mongoose.model("API", dataSchema);

const getData = async () => {
  const response = await fetch("https://api.publicapis.org/entries");
  const data = await response.json();
  for (let i = 0; i < data.entries.length; i++) {
    const api = new Data({
      API: data.entries[i]["API"],
      Description: data.entries[i]["Description"],
      Link: data.entries[i]["Link"],
      Category: data.entries[i]["Category"],
    });
    api.save();
  }
};

getData();

/*____________________________________________________________________________________*/