const form = document.getElementById("formData")

const nama = document.getElementById("namaInput")
const role = document.getElementById("roleInput")
const avability = document.getElementById("avabilityInput")
const usia = document.getElementById("usiaInput")
const lokasi = document.getElementById("lokasiInput")
const experiance = document.getElementById("experianceInput")
const email = document.getElementById("emailInput")
const password = document.getElementById("passwordInput")

const namaTmpl = document.getElementById("nama")
const roleTmpl = document.getElementById("role")
const avabilityTmpl = document.getElementById("avability")
const usiaTmpl = document.getElementById("usia")
const lokasiTmpl = document.getElementById("lokasi")
const experienceTmpl = document.getElementById("experiance")
const emailTmpl = document.getElementById("email")

function showHide() {
    if (form.style.display === "none") {
        form.style.display = "flex"
    } else {
        form.style.display = "none"
    }
    
    nama.placeholder = namaTmpl.textContent
    role.placeholder = roleTmpl.textContent
    avability.placeholder = avabilityTmpl.textContent
    usia.placeholder = usiaTmpl.textContent
    lokasi.placeholder = lokasiTmpl.textContent
    experiance.placeholder = experienceTmpl.textContent
    email.placeholder = emailTmpl.textContent
}

function test (){


    namaTmpl.innerHTML = nama.value
    roleTmpl.innerHTML = role.value
    avabilityTmpl.innerHTML = avability.value
    usiaTmpl.innerHTML = usia.value
    lokasiTmpl.innerHTML = lokasi.value
    experienceTmpl.innerHTML = experiance.value
    emailTmpl.innerHTML = email.value

    
    document.getElementById("edit").reset()
    return showHide()
}