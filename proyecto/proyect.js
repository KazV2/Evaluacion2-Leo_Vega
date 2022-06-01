function validar()
{
    var nombre = document.formulario.txt_nombre.value
    var apellido = document.formulario.txt_apellidos.value
    var telefono = document.formulario.txt_telefono.value
    var val1 = telefono[0]
    var rut = document.formulario.txt_rut.value
    var guion = rut.indexOf("-")
    var localidad = document.formulario.slt_localidad.value

    var checks=[]

    var casa = document.getElementById("inlineCheckbox1")
    if(casa.checked){
        checks.push(casa.value);
    }
    var duplex = document.getElementById("inlineCheckbox2")
    if(duplex.checked){
        checks.push(duplex.value);
   }
   var departamento = document.getElementById("inlineCheckbox3")
    if(departamento.checked){
        checks.push(departamento.value);
   }
   var terreno = document.getElementById("inlineCheckbox4")
    if(terreno.checked){
        checks.push(terreno.value);
   }
   var mansion = document.getElementById("inlineCheckbox5")
    if(mansion.checked){
        checks.push(mansion.value);
   }
   var edificio = document.getElementById("inlineCheckbox6")
    if(edificio.checked){
        checks.push(edificio.value);
   }
   var hotel = document.getElementById("inlineCheckbox7")
    if(hotel.checked){
        checks.push(hotel.value);
   }
   var otro = document.getElementById("inlineCheckbox8")
    if(otro.checked){
        checks.push(otro.value);
   }

   var rangos = []

   var rango2 = document.getElementById("exampleRadios1")
    if(rango2.checked){
        rangos.push(rango2.value);
   }
   var rango2 = document.getElementById("exampleRadios2")
    if(rango2.checked){
        rangos.push(rango2.value);
   }
   var rango3 = document.getElementById("exampleRadios3")
    if(rango3.checked){
        rangos.push(rango3.value);
   }



    if(document.formulario.txt_nombre.value.length < 3)
    {
        alert("Nombre debe contener más de 3 caracteres")
        return false
    }
    if(document.formulario.txt_apellidos.value.length < 3)
    {
        alert("Apellido debe contener mas de 3 caracteres")
        return false
    }
    if(document.formulario.txt_apellidos.value.length < 3)
    {
        alert("La Nacionalidad debe contener mas de 3 caracteres")
        return false
    }

    if(telefono.length != 9)
    {
        alert("El telefono debe ser de 9 caracteres")
        return false
    }
    else(telefono.length == 9)
    {
        if(val1 != 9)
        {
            alert(val1 + "Debe agregar un 9 al principio de su numero")
            return false
        }
    }

    if(rut.length != 9 && rut.length != 10)
    {
        alert("rut invalido")
        return false
    }

    if(guion == -1)
    {
        alert("Necesita colocar un guion")
        return false
    }

    alert("Nombre: " + nombre + apellido + "\nRut: " + rut + "\nTelefono: " + telefono + "\nLocalidad: " + localidad + "\nInmuebles seleccionados: " + checks + "\nRango de precio seleccionado: " + rangos)
}