import { useContext, createContext, useState } from "react";

const AppContext = createContext({
   items: [],
   addNewItem: (item) => {},
   updateItem: (updateItem) => {},
   removeItem: (id) => {},
   getItem: (id) => {},
});

export default function Store({ children }) {
   const [items, setItems] = useState([
      {
         id: "0",
         name: "Jugador 1",
         picture: "",
         state: "purchased",
      },

      {
         id: "1",
         name: "Jugador 2",
         picture: "",
         state: "purchased",
      },
   ]);

   function addNewItem(item) {
      const copy = [...items];
      copy.push(item);

      setItems([...copy]);
   }

   function updateItem(updateItem) {
      const copy = [...items];
      const tmp = copy.find(
         (item) => item.id === updateItem
      );
      tmp = updateItem;
      setItems([...copy]);
   }

   function removeItem(id) {}
   function getItem(id) {
      const res = items.find((item) => item.id === id);
      return res;
   }

   return (
      <AppContext.Provider
         value={{
            items,
            addNewItem,
            updateItem,
            removeItem,
            getItem,
         }}>
         {children}
      </AppContext.Provider>
   );
}

export function useAppContext() {
   return useContext(AppContext);
}
