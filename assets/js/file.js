let cl = console.log;

function changer_style() {
    let pid = document.getElementById("parag1");
    // pid.className = "new-style";
    pid.style.color = "white";
    pid.style.backgroundColor = "black";
    pid.style.border = "1px dashed red";
    pid.style.padding = "5px";
}

function changer_style2() {
    let pid2 = document.getElementById("parag2");
    pid2.classList.add("new-style");
}

function getAttributes() {
    let aid = document.getElementById("w3r");
    let attributes = aid.getAttributeNames();

    cl(attributes); // (6) ["id", "type", "hreflang", "rel", "target", "href"]

    let pexo2 = document.getElementById("exo2");

    pexo2.innerHTML += "<p>href=" + aid.getAttribute("href") + "</p>";
    pexo2.innerHTML += "<p>hreflang=" + aid.getAttribute("hreflang") + "</p>";
    pexo2.innerHTML += "<p>rel=" + aid.getAttribute("rel") + "</p>";
    pexo2.innerHTML += "<p>target=" + aid.getAttribute("target") + "</p>";
    pexo2.innerHTML += "<p>type=" + aid.getAttribute("type") + "</p>";
}

function getFormvalue() {
    var form = document.getElementById("form1");
    var prenomElement = form.querySelector('input[name="fname"]');
    var nomElement = form.querySelector('input[name="lname"]');

    let pexo3 = document.getElementById("exo3");
    pexo3.innerHTML += "<p>prenom=" + prenomElement.value + "</p>";
    pexo3.innerHTML += "<p>nom=" + nomElement.value + "</p>";
}