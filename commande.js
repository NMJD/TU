
// //form commande

// let commandeForm = document.getElementById("commandeForm");

// commandeForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let item = document.getElementById("itemSelect");
//   let quantity = document.getElementById("quantityInput");
//   let details = document.getElementById("detailsTextarea");
//   let name = document.getElementById("nameInput");
//   let phone = document.getElementById("phone");
//   let mail = document.getElementById("emailInput");

//   if (name.value == "" || phone.value == "", item.value == "", quantity.value == "") {
//     alert("Veuillez remplir les informations manquantes !");
//   } else {
//     console.log(
//       `Commande: ${item.value}, ${quantity.value}, ${details.value}, ${mail.value}, ${phone.value}`
//     );
    
//     window.open(`https://wa.me/+242055105490/?text=Commande de mr/mme ${name.value} : ${quantity.value} ${item.value} \n Adresse mail : ${mail.value} \n Téléphone : ${phone.value} \n Quelques détails supplémentaires: ${details.value}`);
//     // alert("Votre commande a été envoyée avec succès");
//   }
// });