// Se debe agregar un sql a donde estara dirigido la informacion
// Clase 39 

// valida que no hayan campos vacios 
let allInputs = document. querySelectorAll("Input");
for(let 1 = 0; i< allInputs. length : 1++);
                                    'blur',((=>{{
        if(allInputs[i).value
            allInputs(1].classList. .add( 'is-invalid')
            errores.push('EL campo Nombre по puede estar vacío')
         )
         else iffallInputs(il.value != "
            allInputs(1).classList. remove( 'is-invalid')
            allInputs[i].classlist.add(*is-valid')
                          I
// valida que no hayan campos vacios 

formulario. addEventListener ( 'submit', (evento) =
     let errores = | 11;
     let inputTitle = document.querySelector("stitle")
     if (inputTitle.value - ""){
         errores. push('EL campo Nombre no puede estar vacío')
    };
     let inputRating = document. querySelector( '#rating')
        if(inputRating. value - "If"
            errores.push('EL Фитро Rating no puede estar vacío')
         }
         if (inputRating.value < 0 II inputRating. value > 10 Ю
            errores. push(* 'El campo Rating debe estar comprendido entre 1 y 10')
     let inputAwards  document.querySelector( '#awards')
    if (inputAwards.value == "I{
         errores. push('ET campo Premios no puede estar vacío')
    }
      if (inputAwards.value < 0 II inputAwards.value > 10 )
        errores.p push('EL campo Premios debe estar comprendido entre 1 y



        