if (window.innerWidth >= window.innerHeight) {
    alert("pls view this on a phone man wtf");
}
 
if (window.innerWidth < window.innerHeight) {
    const elmnt = document.getElementById("belowHeader"); elmnt.remove();
}