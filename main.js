
function getRepos(username) {
    
    const options = {
        headers: new Headers({
            "Accept": "application/vnd.github.v3+json"     
        })
    };
    
    fetch(`https://api.github.com/users/${username}/repos`, options)
    .then (response => response.json())
    .then (response => {
        
        if (response.message === "Not Found") {
            alert("User Not Found!  Try Again!");
        }
        else {
            let generateHTML = "";
            for (let i = 0; i < response.length; i++) {
                generateHTML += `<p><a href="${response[i].html_url}" target="_blank">${response[i].name}</a></p>`
            }

            console.log(response);
            
            document.querySelector("#output").innerHTML = generateHTML;
            document.querySelector("#form").reset();

        }
    })
}

document.querySelector("#search").addEventListener("click", (e) => {
    e.preventDefault();
    getRepos(document.querySelector("#username").value);
});



