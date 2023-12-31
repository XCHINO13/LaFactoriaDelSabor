function validarCampos(objeto) {
  if (!Object.keys(objeto).length) return false;

  for (let item in objeto) {
    if (!objeto[item] || objeto[item].trim() === "" || objeto[item] == 'null') {
      return false;
    }
  }
  return true;
}

function validarCamposReserva(objeto) {
  if (!Object.keys(objeto).length) return false;

  for (let item in objeto) {
    console.log('validar objeto',objeto);
    console.log('item',item);

    if(item == 'id_reserva'){
      continue;
    }
    if (typeof objeto[item] === "number") {
      if (objeto[item] >= 0) {
        continue;
      } else { 
        return false;
      }
    } else if (!objeto[item] || objeto[item].trim() === "") {
      return false;
    }
  }
  return true;
}

module.exports = {
  validarCampos,
  validarCamposReserva,
};
