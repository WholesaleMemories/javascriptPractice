let usr = prompt("Who's there?");

if (usr === "Admin") {
    let pass = prompt("Password?");

    if (pass === "TheMaster") {
        alert("Welcome!");
    } else if (pass === null || pass === "") {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (usr === null || usr === "") {
    alert("Canceled");
} else {
    alert("I don't know you");
}
