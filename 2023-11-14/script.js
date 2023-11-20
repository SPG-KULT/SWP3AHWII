function toggleVisibility(e) {

    window.t = e.target;
    parent = e.target.parentElement;
    kids = parent.children;
    h = kids[0];
    h.clicked = !h.clicked;
    if (h.clicked) {
        for (let i = 1; i < kids.length; i++) {
            kids[i].style.visibility = "visible";
            kids[i].style.position = "static";
        }
        parent.style.backgroundColor = "white";
        parent.style.color = "black";
    } else {
        for (let i = 1; i < kids.length; i++) {
            kids[i].style.visibility = "hidden";
            kids[i].style.position = "absolute";
        }
        parent.style.backgroundColor = "";
        parent.style.color = "";
    }

}
const articles = document.querySelectorAll("div.news-articles > article > h2");
articles.forEach((a) => a.addEventListener("click", toggleVisibility));


document.querySelectorAll('article').forEach((article) => {
    let paragraphs = Array.from(article.getElementsByTagName('p'));
    paragraphs.reverse().forEach((p) => {
        article.appendChild(p);
    });
});
