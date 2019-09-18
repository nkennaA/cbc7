document.getElementById("id1").style.color = "blue";
document.getElementById("id2").style.color = "green";
document.getElementById("id3").style.color = "purple";
document.getElementById("id3").nextElementSibling.style.color = "red";
document.getElementById("id3").nextElementSibling.className = "change";
document.getElementById("id1").nextElementSibling.style.fontFamily = "Comic Sans,Impact,Charcoal,sans-serif";
document.getElementById("id2").previousElementSibling.style.fontFamily = "Comic Sans,Impact,Charcoal,sans-serif";
document.getElementById("id7").addEventListener("click", function()
{
    document.getElementById("id3").style.fontSize = "small";
});
document.getElementById("id4").addEventListener("click", function(){
    this.style.color = "red";
}, true);