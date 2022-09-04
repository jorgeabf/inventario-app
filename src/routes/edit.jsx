import { Routes, Route, useParams } from "react-router-dom";
import { useAppContext } from "../store/store";

export default function Edit() {
   const params = useParams();
   const store = useAppContext();

   const item = store.getItem(params.id);

   return <h1>{item.name}</h1>;
}
