function checkData(e) {
    if (123 == e.password.value && "abc" == e.username.value) {
        document.location.href="om-mig-sida.html";
        return false;
    }
}