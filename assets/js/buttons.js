"use strict";

// read more 
document.addEventListener("DOMContentLoaded", function () {
    // generate btn
    const containerBtn = document.querySelectorAll(".toggle-read-more");

    containerBtn.forEach((container) => {
        // if button exist
        if (!container.querySelector(".btn-success")) {
            // create button
            const button = document.createElement("button");
            button.className = "btn btn-success g-4 mt-2 toggle-read-more-btn";
            button.textContent = "Read more";

            // add button to DOM
            container.appendChild(button);
        }
    });

    // Funkcionalita buttons
    document.querySelectorAll(".toggle-read-more-btn").forEach((button) => {
        button.addEventListener("click", function () {
            const cardBody = button.closest(".card-body");
            const content = cardBody.querySelector(".read-more-content");

            if (content.classList.contains("d-none")) {
                // Zobrazit obsah
                content.classList.remove("d-none");
                button.textContent = "Read less";
            } else {
                // Skryt obsah
                content.classList.add("d-none");
                button.textContent = "Read more";
            }
        });
    });
});


const gitHubPath = "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z";
const gitHubPagesPath = "M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z";

// odkazy na Github
const linksGitHub = [
    { url: "https://github.com/MarinaP-prog/FinApp", text: "See on GitHub", pathD: gitHubPath, },
    {
        url: "https://github.com/MarinaP-prog/reusable-ui-components",
        text: "See on GitHub", pathD: gitHubPath,
    },
    {
        url: "https://github.com/MarinaP-prog/habit-tracker/",
        text: "See on GitHub", pathD: gitHubPath,
    },
    { url: "https://github.com/MarinaP-prog/", text: "See on GitHub", pathD: gitHubPath, },
    {
        url: "https://github.com/MarinaP-prog/webFiktivniFirmy",
        text: "See on GitHub", pathD: gitHubPath,
    },
    { url: "https://github.com/MarinaP-prog/formJS", text: "See on GitHub", pathD: gitHubPath, },
    { url: "https://github.com/MarinaP-prog/Aquarium", text: "See on GitHub", pathD: gitHubPath, },
    { url: "https://github.com/MarinaP-prog/cviko", text: "See on GitHub", pathD: gitHubPath, },
    { url: "https://github.com/MarinaP-prog/MagistriApp", text: "See on GitHub", pathD: gitHubPath, },
    { url: "https://github.com/MarinaP-prog/MagistriApp", text: "See on GitHub", pathD: gitHubPath, },
    {
        url: "https://github.com/MarinaP-prog/WeatherAustra",
        text: "See on GitHub", pathD: gitHubPath,
    },
];

// odkazy na GitHub pages
const linksGitHubPages = [
    {
        url: "https://marinap-prog.github.io/reusable-ui-components/",
        text: "See on GitHub Pages", pathD: gitHubPagesPath,
    },
    {
        url: "https://marinap-prog.github.io/habit-tracker/",
        text: "See on GitHub Pages", pathD: gitHubPagesPath,
    },
    {
        url: "https://marinap-prog.github.io/webFiktivniFirmy/",
        text: "See on GitHub Pages", pathD: gitHubPagesPath,
    },
    {
        url: "https://marinap-prog.github.io/formJS/",
        text: "See on GitHub Pages", pathD: gitHubPagesPath,
    },
    {
        url: "https://marinap-prog.github.io/Aquarium/",
        text: "See on GitHub Pages", pathD: gitHubPagesPath,
    },
];

const gitHubPagesContainers = document.querySelectorAll(".pagesContainer");
const gitHubContainers = document.querySelectorAll(".linksContainer");

// Prirazeni odkazu do odpovidajicich kontejneru GitHub
linksGitHub.forEach((linkData, index) => {
    if (index < gitHubContainers.length) {
        const targetContainer = gitHubContainers[index];
        targetContainer.appendChild(createIconLinkButton(linkData));
    }
});

// Prirazeni odkazu do odpovidajicich kontejneru GitHubPages
linksGitHubPages.forEach((linkData, index) => {
    if (index < gitHubPagesContainers.length) {
        const targetContainer = gitHubPagesContainers[index];
        targetContainer.appendChild(
            createIconLinkButton(linkData)
        );
    }
});

function createIconLinkButton({ url, text, pathD }) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "icon-link icon-link-hover list-group-item";
    link.style.setProperty("--bs-link-hover-color-rgb", "25, 135, 84");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("bi");
    svg.setAttribute("aria-hidden", true);
    svg.setAttribute("viewBox", "0 0 448 512");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);

    svg.appendChild(path);
    link.appendChild(svg);
    link.append(" ", text);

    return link;
}
