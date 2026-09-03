let mode = document.querySelector(".mode")
let body = document.querySelector("body")
let intro = document.querySelector(".intro")
let header = document.querySelector("header")
let webt = document.querySelector(".webt")
let date = document.querySelector(".date")
let translate = document.querySelector(".translate")
let more = document.querySelector(".more")
let photos = document.querySelector(".photos")
let last = document.querySelector(".last")
let about = document.querySelector(".about")
let extra = document.querySelector(".extra")
let support = document.querySelector(".support")
let report = document.querySelector(".report")
let join = document.querySelector(".join")
let suggestions = document.querySelector(".suggestions")
let darkMode = false;
let savedMode = localStorage.getItem("darkMode");

if (savedMode === "true")
{
    ChangeMode();
}

function ChangeMode()
{
    if (darkMode === false)
    {
        body.style.backgroundColor = "#2d437b"
        intro.style.color = "white"
        header.style.backgroundColor = "#2d587b"
        webt.style.color = "gold"
        date.style.backgroundColor = "gold"
        date.style.color = "purple"
        mode.style.backgroundColor = "gold"
        mode.style.color = "purple"
        translate.style.backgroundColor = "gold"
        translate.style.color = "purple"
        more.style.backgroundColor = "gold"
        more.style.color = "purple"
        photos.style.backgroundColor = "gold"
        photos.style.color = "purple"
        last.style.backgroundColor = "gold"
        about.style.color = "purple"
        extra.style.color = "purple"
        support.style.backgroundColor = "purple"
        support.style.color = "gold"
        report.style.backgroundColor = "purple"
        report.style.color = "gold"
        join.style.backgroundColor = "purple"
        join.style.color = "gold"
        suggestions.style.backgroundColor = "purple"
        suggestions.style.color = "gold"

        localStorage.setItem("darkMode", "true")

        darkMode = true;
    }
    else
    {
        body.style.backgroundColor = "lightblue"
        intro.style.color = "black"
        header.style.backgroundColor = "#67ecf0"
        webt.style.color = "white"
        date.style.backgroundColor = "#67ecf0"
        date.style.color = "black"
        mode.style.backgroundColor = "white"
        mode.style.color = "black"
        translate.style.backgroundColor = "white"
        translate.style.color = "black"
        more.style.backgroundColor = "#67b9f0"
        more.style.color = "black"
        photos.style.backgroundColor = "#67b9f0"
        photos.style.color = "black"
        last.style.backgroundColor = "#67b9f0"
        about.style.color = "black"
        extra.style.color = "black"
        support.style.backgroundColor = "white"
        support.style.color = "black"
        report.style.backgroundColor = "white"
        report.style.color = "black"
        join.style.backgroundColor = "white"
        join.style.color = "black"
        suggestions.style.backgroundColor = "white"
        suggestions.style.color = "black"
        darkMode = false;

        localStorage.setItem("darkMode", "false")

    }
}