import { useParams } from "react-router-dom";
import { useAppContext } from "../store/store";
import {
   useForm,
   useField,
   splitFormProps,
} from "react-form";

import NameInput from "../components/NameInput";

export default function Edit() {
   const params = useParams();
   const store = useAppContext();

   const {
      Form,
      meta: { isSubmitting, canSubmit },
   } = useForm({
      onSubmit: async (values, instance) => {
         const { name } = values;
         const item = store.getItem(params.id);
         item.name = name;
         store.updateItem(item);
      },
      debugForm: false,
   });

   const item = store.getItem(params.id);

   return (
      <div>
         <h1>{item.name}</h1>
         <Form>
            <NameInput inputValue={item.name} />
         </Form>
      </div>
   );
}
