alert('Hej');

function checkData(e) {
    if (e.password.value == "tobias123" && e.username.value == "Etik") {
        document.location.href="om-mig-sida.html";
        return false;
    }
}