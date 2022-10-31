alert('Hej');

function checkData(e) {
    if ("tobias123" == e.password.value && "Etik" == e.username.value) {
        document.location.href="om-mig-sida.html";
        return false;
    }
}