console.log('fetcher.js');

fetch(githubify("../data/data.json")).then(response => {
    return response.json();
}
).then(data => {
    data.repositories.forEach(repo => {
        var yearSection = yearSectionOf(repo.year);


        repoNode = document.createElement("div");
        repoNode.classList.add("repo");
        repoNode.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>
        <img src="${githubify(repo.image)}" alt="${repo.name}">
        <a href="${repo.url}" target="_blank">View on GitHub</a>
        `;
        yearSection.appendChild(repoNode);
    });
}
).catch(err => {
    console.log(err);
}
);

function yearSectionOf(year) 
{
    var section = document.getElementById(year + "-repos");

    if (!section) {
        // Create a new section for the year
        section = document.createElement("section");
        section.id = year + "-repos";
        section.classList.add("year-section");
        section.innerHTML = `<h2>${year}</h2>`;
        document.getElementById("repos").appendChild(section);

        // Add a link to the year in the navigation
        navAnchor = document.createElement("a");
        navAnchor.href = "#" + year + "-repos";
        navAnchor.innerText = year;
        document.querySelector("nav").appendChild(navAnchor);
    }

    return section;
}

function githubify(src) 
{
    return window.location.hostname === "mrdarip.github.io"? src.replace("../", "./"): src;
}