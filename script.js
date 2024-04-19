for (var i = 1; i > 0; i++) {
    var DateOfBirth = prompt("what is your date of birth (yyyy-mm-dd)");
    var age = Math.floor((new Date().getTime() - new Date(DateOfBirth).getTime()) / (1000 * 60 * 60 * 24));
    var year = Math.floor(age / 365);
    var month = Math.floor((age % 365) / 31);
    var days = Math.floor((age % 365) % 31);
    alert("you are " + year + " years " + month + " months and " + days + " days old");
    var toRestart = prompt("to restart enter 1 and to stop the program enter any key");
    if (toRestart === "1") {
    } else {
        break;
    }
}