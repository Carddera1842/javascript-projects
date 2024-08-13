window.addEventListener('load', function(){
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(function (response) { 
            response.json().then(function(json) {
                const container = document.getElementById('container');
                json.sort(function(a,b) {
                    return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
                });

                const count = document.getElementById("count");
                count.innerHTML = `These ${json.length} extraordinary people are a few of the handfil of humnkind who have had the privilage of looking down on our beautiful plamet from the quiet darkness of outer space.`;
                
                for (let i = 0; i < json.length; i++) {
                    let astronaut = json[i];
                    let activeClass = astronaut.active ? "active" : "";
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li class="${activeClass}">Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}">
                    </div>
                `;
                }
            });
        })
});
