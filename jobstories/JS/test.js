/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars:
true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//updated 1st time

window.onload = function() {
    let articleTitles = document.querySelectorAll("main section.stories article h2");
    for(let articleTitle of articleTitles) {
        articleTitle.addEventListener("click",clickArticleTitle);
    }

    let articleTexts = document.querySelectorAll("main section.stories article p");
    for(let articleText of articleTexts) {
        articleText.addEventListener("click",clickArticleText);
    }

    let categoryDiv = document.getElementById("category");
    categoryDiv.addEventListener("click", showHideCategory);
}

function clickArticleTitle(event) {
    let titleElt = event.target;
    let aElt = titleElt.nextElementSibling.nextElementSibling;
    aElt.click();
}

function clickArticleText(event) {
    let pElt = event.target;
    let aElt = pElt.nextElementSibling;
    aElt.click();
}

function showHideCategory(event) {
    let divElt = event.target;
    let ulElt = divElt.nextElementSibling;
    if (ulElt.style.display === "block") {
        ulElt.style.display = 'none';
    } else {
        ulElt.style.display = 'block';
    }
}
