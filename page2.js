var bgText = document.getElementById("bgText")
var prevDiv = document.getElementById("preview")
var c1 = document.getElementById("choice1")
var c2 =  document.getElementById("choice2")
var c3 = document.getElementById("choice3")
var numUse = 0;
var picChooser = document.getElementById("picChooser");

bgText.addEventListener("keyup",function(ev){
    if(ev.keyCode == 13){
        if(c1.checked){
            if(bgText.value == "land")
                document.body.style.backgroundImage = "url(i1.jpg)"
            else if(bgText.value == "fort")
                document.body.style.backgroundImage = "url(i2.jpg)"
            else if(bgText.value == "grass")
                document.body.style.backgroundImage = "url(i3.jpg)"
            else
                document.body.style.backgroundColor = bgText.value;
        }

        else if(c2.checked){
            if(bgText.value == "land")
                prevDiv.style.backgroundImage = "url(i1.jpg)"
            else if(bgText.value == "fort")
                prevDiv.style.backgroundImage = "url(i2.jpg)"
            else if(bgText.value == "grass")
                prevDiv.style.backgroundImage = "url(i3.jpg)"
            else
                prevDiv.style.backgroundColor = bgText.value;
        }

        else if(c3.checked){
            if(bgText.value == "land")
                menu.style.backgroundImage = "url(i1.jpg)"
            else if(bgText.value == "fort")
                menu.style.backgroundImage = "url(i2.jpg)"
            else if(bgText.value == "grass")
                menu.style.backgroundImage = "url(i3.jpg)"
            else
                menu.style.backgroundColor = bgText.value;
        }

        else
            alert("choose an option")

        bgText.value = "";
        
        numUse++;
        console.log(numUse);
        if(numUse>5){
            document.getElementById("display").innerHTML = "You've reached the limit. Please pay to use more!"
        }   
    }
    

        
});

picChooser.addEventListener("change",function(){
    var picNum = parseInt(picChooser.value);
    if(picNum > 3)
        picChooser.value = 1;
    if(picNum<1)
        picChooser.value = 3;
    prevDiv.style.backgroundImage = "url(i" +picChooser.value + ".jpg)"
});