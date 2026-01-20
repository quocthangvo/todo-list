import type { IPerson } from "../../interface/TodoList/Person";

export const TODOLIST_TABLE = [
  {
    name: "ID",
    state: "ID",
  },
  {
    name: "NAME",
    state: "Name",
  },
  {
    name: "AGE",
    state: "Age",
  },
  {
    name: "ADDRESS",
    state: "Address",
  },
  {
    name: "IMAGE",
    state: "ImageID",
  },
];

export function getImageUrl(person: IPerson) {
  return "https://i.imgur.com/" + person.ImageID + "s.jpg";
}
