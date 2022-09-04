import {
   useForm,
   useField,
   splitFormProps,
} from "react-form";

async function validateName(name, instance) {
   if (!name) {
      return "A name is required";
   }

   return instance.debounce(async () => {
      await new Promise((resolve) =>
         setTimeout(resolve, 500)
      );
      return false;
   }, 500);
}

export default function NameInput() {
   const {
      meta: { error, isTouched, isValidating },
      getInputProps,
   } = useField("name", {
      validate: validateName,
   });

   return (
      <>
         <input {...getInputProps()} />{" "}
         {isValidating ? (
            <em>Validating...</em>
         ) : isTouched && error ? (
            <em>{error}</em>
         ) : null}
      </>
   );
}
