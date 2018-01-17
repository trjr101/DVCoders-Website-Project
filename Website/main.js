var nightModeOn = false;
var dayColors =
{
    primaryBg: "rgb(255, 255, 255)",
    secondaryBg: "rgb(238, 238, 238)",
    primaryFg: "rgb(51, 51, 51)",
    secondaryFg: "rgb(51, 51, 51)"
}
var nightColors =
{
    primaryBg: "rgb(34, 34, 34)",
    secondaryBg: "rgb(60, 60, 60)",
    primaryFg: "rgb(244, 244, 244)",
    secondaryFg: "rgb(181, 181, 181)"
}

var body = document.getElementsByTagName("body")[0];
var button = document.getElementById("night-mode");
var jumbotron = document.getElementsByClassName("jumbotron");

var paragraphTags = ["p", "li", "dd", "th", "tr"];
var paragraphs = [];
for (var i = 0; i < paragraphTags.length; i++)
{
    var newElements = document.getElementsByTagName(paragraphTags[i]);
    for (var j = 0; j < newElements.length; j++)
    {
        paragraphs.push(newElements[j]);
    }
}

var headerTags = ["h1", "h2", "h3", "h4"];
var headers = [];
for (var i = 0; i < headerTags.length; i++)
{
    var newElements = document.getElementsByTagName(headerTags[i]);
    for (var j = 0; j < newElements.length; j++)
    {
        headers.push(newElements[j]);
    }
}

function nightMode()
{
    button.innerText = "Day Mode";
    body.style.background = nightColors.primaryBg;
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = nightColors.primaryFg;
    }

    for (var i = 0; i < headers.length; i++) {
        headers[i].style.color = nightColors.primaryFg;
    }
    document.querySelector('.jumbotron').style.backgroundColor = nightColors.secondaryBg;
}
function dayMode()
{
    button.innerText = "Night Mode";
    body.style.background = dayColors.primaryBg;
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = dayColors.primaryFg;
    }

    for (var i = 0; i < headers.length; i++) {
        headers[i].style.color = dayColors.primaryFg;
    }
    document.querySelector('.jumbotron').style.backgroundColor = dayColors.secondaryBg;
}
function toggle()
{
    nightModeOn = !nightModeOn;
    if (nightModeOn) {
        nightMode();
    } else {
        dayMode();
    }
}

button.addEventListener("click", toggle);