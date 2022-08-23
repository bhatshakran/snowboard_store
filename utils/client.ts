import { createClient } from "next-sanity";

//...

export const client = createClient({
  projectId: "imi976ft",
  dataset: "snowboard",
  apiVersion: "2022-03-25",
  useCdn: false,
});
