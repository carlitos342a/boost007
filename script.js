document.getElementById("btn").addEventListener("click", myFunction);
var imgArray = ["1.jpeg", "2.jpeg", "3.jpeg"]
function myFunction() {
  var randomIndex = Math.floor(Math.random() * imgArray.length)
  var randomImg = imgArray[randomIndex]
  var newImg = document.createElement("img")
  newImg.src = randomImg

  var imgL = document.getElementsByTagName("img")

  if (imgL.length > 0) {
    document.body.replaceChild(newImg, imgL[0])
  } else {
    document.body.appendChild(newImg)
  }
}