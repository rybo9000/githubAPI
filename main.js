
function getRepos(username) {
    
    const options = {
        headers: new Headers({
            "Accept": "application/vnd.github.v3+json"     
        })
    };
    
    fetch(`https://api.github.com/users/:${username}/repos`, options)
    .then (reponse => Response.json())
    .then (reponse => console.log(response));
}

document.querySelector("#search").addEventListener("click", (e) => {
    e.preventDefault();
    getRepos(document.querySelector("#username").value);
});



