var rollV, nameV, genderV, addressV;


function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  console.log(rollV, nameV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("asistencia/" + rollV)
    .set({
      Fecha: rollV,
      Documento: nameV,
      Asesor: genderV,
      Estatus: addressV
    });
  alert("Data Inserted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("asistencia/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().Fecha;
      document.getElementById("name").value = snap.val().Documento;
      document.getElementById("gender").value = snap.val().Asesor;
      document.getElementById("address").value = snap.val().Estatus;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("cliente/" + rollV)
    .update({
      Fecha: rollV,
      Documento: nameV,
      Asesor: genderV,
      Estatus: addressV
    });
  alert("Data Update");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("asistencia/" + rollV)
    .remove();
  alert("Data Deleted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
 
};
