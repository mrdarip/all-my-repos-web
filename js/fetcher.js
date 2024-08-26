console.log('fetcher.js');

fetch("../data/data.json").then(response => {
    return response.json();
}
).then(data => {
    data.repositories.forEach(repo => {
        var yearSection = document.getElementById(repo.year + "-repos");

        if (!yearSection) {
            console.log("Creating new year section for " + repo.year);
            yearSection = document.createElement("section");
            yearSection.id = repo.year + "-repos";
            yearSection.classList.add("year-section");
            yearSection.innerHTML = `<h2>${repo.year}</h2>`;
            console.log(yearSection);
            document.getElementById("repos").appendChild(yearSection);
        }
        console.log(yearSection);


        repoNode = document.createElement("div");
        repoNode.classList.add("repo");
        repoNode.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>
        <a href="${repo.url}" target="_blank">View on GitHub</a>
        `;
        yearSection.appendChild(repoNode);
    });
}
).catch(err => {
    console.log(err);
}
);