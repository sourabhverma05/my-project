const clicked_item = localStorage.getItem("item");
let item = JSON.parse(clicked_item);

const itemDetails = document.getElementById("item__details");
const detailAbout = document.createElement("p");
detailAbout.classList.add("Card_all_details");

const detailImage = document.createElement("img");
detailImage.classList.add("detailPage__image");
detailImage.src = item?.picture
itemDetails.appendChild(detailImage);

detailAbout.innerHTML =
 "<h1>" + item?.name + "</h1>" + 
   item?.company +" COMPANY" + "<br>" + 
"<b> Age : </b>" + item?.age + "<br>" +
"<b> Gender : </b>" + item?.gender + "<br>" +
"<b> Phone : </b>" + item?.phone + "<br>" +
"<b> Email : </b>" + item?.email + "<br>" +
"<b>Index : </b>" + item?.index + "<br>" +
"<b> Is Active : </b>" + item?.isActive + "<br>" +
"<b> Balance : </b>" +  item?.balance + "<br>" +
"<b> Eye Color : </b>" + item?.eyeColor + "<br>" +
" <b>Latitude : </b>" + item?.latitude + "<br>" +
" <b>Longitude : </b>" + item?.longitude + "<br>" +
" <b>Registerd : </b>" + item?.registered + "<br>" +
"<b> Guid : </b>" + item?.guid + "<br>" +
" <b>Tags : </b>" + item?.tags + "<br>" +
" <b>Address : </b>" + item?.address + "<br>" +
" <b>Greeting : </b>" + item?.greeting + "<br>" +
" <b>Favorite Fruit  : </b>" + item?.favoriteFruit + "<br>" +
" <b>About : </b>" + item?.about + "<br>";  
// " <b>Friends : </b>" + item?.friends + "<br>" ;

itemDetails.appendChild(detailAbout)

