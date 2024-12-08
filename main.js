let reposdata=document.querySelector(".show_data")
let input = document.querySelector("input");
let getbutton = document.querySelector(".get_button");

getbutton.onclick = function () {
    getrepos();
}
function getrepos() { 
    if (input.value == "") { 
        reposdata.innerHTML = '<span>Enter Github Username</span>';
    }
    else {
        fetch('https://api.github.com/users/'+input.value+'/repos')
            .then(function (response) { 
                return response.json();
            })
            .then(function (data) {
                reposdata.innerHTML = "";

                data.forEach(data => {
                    let maindiv = document.createElement("div");
                    let reponame = document.createTextNode(data.name);
                    maindiv.appendChild(reponame);

                    let starspan = document.createElement("span");
                    let starcount = document.createTextNode('Satrs ' + data.stargazers_count);
                    starspan.appendChild(starcount);
                    maindiv.appendChild(starspan);

                    let theurl = document.createElement("a");
                    let urlrext = document.createTextNode("visit");
                    theurl.href = `https://github.com/ ${input.value}/` + data.name;
                    theurl.setAttribute = ('target' , '_blank');

                    theurl.appendChild(urlrext);
                    maindiv.appendChild(theurl);
                    
                    maindiv.className = "repo_box";
                    reposdata.appendChild(maindiv);




                });
        })
    }
}