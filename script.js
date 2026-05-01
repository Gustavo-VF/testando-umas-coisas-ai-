// --- MANTENDO SUAS CONFIGURAÇÕES ORIGINAIS ---
const bColar = document.getElementById("bColar");
const echave = document.getElementById("chave");
const universalLink = "https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ%20gAVw2g=";
const universalLink2 = "https://meudanfe.com.br/#";

// ... (seus objetos satLinks, nfceLinks, mesNome e estadoNomes permanecem iguais)

// --- NOVA LÓGICA DE LEITURA DE IMAGEM (OCR) ---
const inputImagem = document.getElementById("inputImagem");
const statusOcr = document.getElementById("statusOcr");

inputImagem.addEventListener("change", async (e) => {
    const arquivo = e.target.files[0];
    if (!arquivo) return;

    statusOcr.textContent = "⏳ Lendo imagem... aguarde.";
    statusOcr.style.color = "blue";

    try {
        // Usa o Tesseract para reconhecer o texto na imagem
        const result = await Tesseract.recognize(arquivo, 'por');
        const textoExtraido = result.data.text;

        // Procura por uma sequência de 44 números no texto
        const chaveEncontrada = textoExtraido.replace(/\s/g, '').match(/\d{44}/);

        if (chaveEncontrada) {
            echave.value = chaveEncontrada[0];
            statusOcr.textContent = "✅ Chave encontrada com sucesso!";
            statusOcr.style.color = "green";
            
            // Dispara sua função de verificação automática
            verificar();
        } else {
            statusOcr.textContent = "❌ Chave de 44 dígitos não encontrada na imagem.";
            statusOcr.style.color = "red";
        }
    } catch (erro) {
        console.error(erro);
        statusOcr.textContent = "⚠️ Erro ao processar imagem.";
        statusOcr.style.color = "red";
    }
});

// --- SUAS FUNÇÕES ORIGINAIS (AJUSTADAS) ---

bColar.onclick = async () => {
    try {
        const texto = await navigator.clipboard.readText();
        echave.value = texto.replace(/[^0-9]/g, '');
        verificar(); // Chamando direto a função
    } catch (erro) {
        alert("Não foi possível colar o conteúdo");
    }
}

echave.addEventListener("input", () => {
    verificar();
});

function verificar() {
    document.getElementById("link1").style.display = "none";
    document.getElementById("link2").style.display = "none";
    document.getElementById("botoes1").style.display = "none";
    document.getElementById("botoes2").style.display = "none";
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("resultado").style.display = "none";

    let chave = echave.value.replace(/[^0-9]/g, '');

    if (chave.length < 44) return;

    if (chave.length > 44) {
        escreverMensage("Chave invalida. Verifique os dígitos.");
        return;
    }

    const uf = chave.slice(0, 2);
    const mes = chave.slice(4, 6);
    const ano = chave.slice(2, 4);
    const cnpj = chave.slice(6, 20);
    const yy = chave.slice(20, 22);
    const sat = chave.slice(22, 25);
    const numero = chave.slice(25, 34);

    if (Number(mes) < 1 || Number(mes) > 12) {
        escreverMensage("Chave invalida. Mês inválido.");
        return;
    }

    if (!estadoNomes[uf]) {
        escreverMensage("Chave invalida. UF não reconhecida.");
        return;
    }

    // Lógica de exibição baseada no tipo (55, 59, 65)
    if (yy === "55") {
        exibirResultadoNfe(universalLink, universalLink2);
    } else if (yy === "59") {
        exibirResultadoSimples(satLinks[uf]);
    } else if (yy === "65") {
        exibirResultadoSimples(nfceLinks[uf]);
    } else {
        escreverMensage("Chave invalida. Tipo de documento (21º/22º) desconhecido.");
        return;
    }

    // Preenche os dados na tela
    document.getElementById("displayestado").textContent = estadoNomes[uf];
    document.getElementById("displaymes").textContent = mes;
    document.getElementById("displayano").textContent = "20" + ano;
    document.getElementById("displaycnpj").textContent = cnpj;
    document.getElementById("displaysat").textContent = sat;
    document.getElementById("displaynumero").textContent = numero;
}

// Funções auxiliares para limpar seu código
function exibirResultadoSimples(url) {
    document.getElementById("resultado").style.display = "grid";
    document.getElementById("link1").style.display = "flex";
    document.getElementById("botoes1").style.display = "flex";
    const linkEl = document.getElementById("link");
    linkEl.href = url;
    linkEl.textContent = url;
}

function exibirResultadoNfe(url1, url2) {
    document.getElementById("resultado").style.display = "grid";
    document.getElementById("link2").style.display = "flex";
    document.getElementById("botoes2").style.display = "flex";
    document.getElementById("link21").href = url1;
    document.getElementById("link21").textContent = url1;
    document.getElementById("link22").href = url2;
    document.getElementById("link22").textContent = url2;
}

// --- MANTENDO SEUS EVENTOS DE BOTÕES ---
document.getElementById("abrirLink").onclick = function () {
    abrirEcopiar(document.getElementById("link").href);
}

document.getElementById("abrirLink1").onclick = function () {
    abrirEcopiar(document.getElementById("link21").href);
}

document.getElementById("abrirLink2").onclick = function () {
    abrirEcopiar(document.getElementById("link22").href);
}

function abrirEcopiar(url) {
    let chave = echave.value.replace(/[^0-9]/g, '');
    navigator.clipboard.writeText(chave);
    window.open(url, '_blank');
}

// Reutilizando sua função de mensagem
function escreverMensage(msg) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = msg;
    mensagem.style.display = "block";
    setTimeout(() => { mensagem.style.display = "none"; }, 4000);
}

// Funções de copiar chave (simplificadas)
async function copiarChave() {
    let chave = echave.value.replace(/[^0-9]/g, '');
    try {
        await navigator.clipboard.writeText(chave);
        escreverMensage("Chave copiada com sucesso!");
    } catch (e) {
        escreverMensage("Erro ao copiar.");
    }
}

document.getElementById("copiarChave").onclick = copiarChave;
document.getElementById("copiarChave1").onclick = copiarChave;
