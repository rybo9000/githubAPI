
function getRepos(username) {
    
    const options = {
        headers: new Headers({
            "Accept": "application/vnd.github.v3+json"     
        })
    };
    
    console.log(`https://api.github.com/users/${username}/repos`);
    
    fetch(`https://api.github.com/users/${username}/repos`, options)
    .then (response => response.json())
    .then (response => console.log(response))
}

document.querySelector("#search").addEventListener("click", (e) => {
    e.preventDefault();
    getRepos(document.querySelector("#username").value);
});



