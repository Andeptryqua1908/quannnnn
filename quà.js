
var to = 'Quân đẹp trai!';
var gift_url = 'https://www.facebook.com/profile.php?id=100016956577911';
var gift_image_url = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/450242630_1806423873216212_5312365268479331109_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=XJQ7LnHmX0sQ7kNvgHCURPF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFM7Gure7o0XCdjqT4vX2DYI4Jjdb-wE4OaA9nRP_61Pg&oe=66C1685B';


var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

