
function getRepos(username) {
    
    const options = {
        headers: new Headers({
            "Accept": "application/vnd.github.v3+json"     
        })
    };
    
    fetch(`https://api.github.com/users/${username}/repos`, options)
    .then (response => response.json())
    .then (response => {
        let generateHTML = "";
        for (let i = 0; i < response.length; i++) {
            generateHTML += `<a href="${response[i].url}" target="_blank">${response[i].name}</a>`
        }
        document.querySelector("#output").innerHTML = generateHTML;
    })
}

document.querySelector("#search").addEventListener("click", (e) => {
    e.preventDefault();
    getRepos(document.querySelector("#username").value);
});



