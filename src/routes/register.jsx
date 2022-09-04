import {
   useForm,
   useField,
   splitFormProps,
} from "react-form";

import NameInput from "../components/NameInput";
import { useAppContext } from "../store/store";

export default function Register() {
   const store = useAppContext();

   const {
      Form,
      meta: { isSubmitting, canSubmit },
   } = useForm({
      onSubmit: async (values, instance) => {
         const { name } = values;
         const newItem = {
            id: crypto.randomUUID(),
            name,
            picture: "",
            state: "purchased",
         };
         store.addNewItem(newItem);
      },
      debugForm: false,
   });

   return (
      <>
         <h1>Register</h1>

         <Form>
            <NameInput />
         </Form>
      </>
   );
}
