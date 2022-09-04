import { useAppContext } from "../store/store";
import { Link } from "react-router-dom";

export default function Home() {
   const store = useAppContext();

   return (
      <div>
         <h1>Home</h1>
         <section>
            {store.items.map((item) => (
               <h3 key={item.id}>
                  <Link to={`edit/${item.id}`}>
                     {item.name}
                  </Link>
               </h3>
            ))}
         </section>
      </div>
   );
}
