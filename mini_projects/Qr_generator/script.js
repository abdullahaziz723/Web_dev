function genQR(){
    let imgbox =document.getElementById("imgbox");
    let  QRimg =document.getElementById("qrimg");
    let  QRtext =document.getElementById("qrtext");


    if(QRtext.value.length >0){
QRimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ QRtext.value;
imgbox.classList.add("show-img");
}} 