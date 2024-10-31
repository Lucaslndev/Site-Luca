function buttonM() {

    let tproduto = document.getElementById("tituloProduto");
    if (tproduto.textContent === "Camiseta Manga Longa Tamanho P" || tproduto.textContent === "Camiseta Manga Longa Tamanho G") {

        tproduto.textContent = "Camiseta Manga Longa Tamanho M"
    }
}

function buttonP() {

    if (document.getElementById("tituloProduto").textContent === "Camiseta Manga Longa Tamanho M") {

        document.getElementById("tituloProduto").textContent = "Camiseta Manga Longa Tamanho P"
    }
}

function buttonG() {

    if (document.getElementById("tituloProduto").textContent === "Camiseta Manga Longa Tamanho P") {

        document.getElementById("tituloProduto").textContent = "Camiseta Manga Longa Tamanho G"
    }
}

function buttonGG() {

    if (document.getElementById("tituloProduto").textContent === "Camiseta Manga Longa Tamanho G") {

        document.getElementById("tituloProduto").textContent = "Camiseta Manga Longa Tamanho GG"
    }
}

function trocarPreco() {

    window.location.href = "http://127.0.0.1:5500/Finalizar.html";
    
}
