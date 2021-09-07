const form = document.getElementById("form")
function showHide() {
    if (form.style.display === "none") {
        form.style.display = "flex"
    } else {
        form.style.display = "none"
    }
}