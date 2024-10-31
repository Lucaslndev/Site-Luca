window.addEventListener("load", function() {

    let box = this.document.getElementById("preco");
    let box2 = this.document.getElementById("preco2");

    if (box.textContent === "R$ 19,90" & box2.textContent === "R$ 19,90") {

        box.textContent = "R$ 49,90";
        box2.textContent = "R$ 49,90"
    }
})