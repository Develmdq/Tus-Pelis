import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

export const AlertEmpty = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "No pueden quedar campos vacíos!",
    confirmButtonColor: "#212529",
    confirmButtonText: "Aceptar",
  });
};

export const AlertFormat = () => {
   Swal.fire({
     icon: "error",
     title: "Oops...",
     text: "Ingresa un formato de email válido!",
     confirmButtonColor: "#212529",
     confirmButtonText: "Aceptar",
   });
}

export const AlertInvalid = (message) => {
  if (message === "Please provide valid email and password") {
   Swal.fire({
     icon: "error",
     title: "Oops...",
     text: "Credenciales inválidas!",
     confirmButtonColor: "#212529",
     confirmButtonText: "Aceptar",
   });
  }
   
}
export const AlertSuccess = () => {
   Swal.fire({
     icon: "success",
     title: "Validación correcta",
     showConfirmButton: false,
     timer: 1500,
   });  
}
