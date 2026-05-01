// ========================================================
// MANTENHA SEUS DICIONÁRIOS AQUI (satLinks, nfceLinks, etc)
// ========================================================

const bColar = document.getElementById("bColar");
const echave = document.getElementById("chave");
const universalLink = "https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ%20gAVw2g=";
const universalLink2 = "https://meudanfe.com.br/#";

// --- LÓGICA DE LEITURA DE IMAGEM (OCR) CORRIGIDA ---
const inputImagem = document.getElementById("inputImagem");
const statusOcr = document.getElementById("statusOcr");

inputImagem.addEventListener("change", async (e) => {
    const arquivos = e.target.files;
    if (arquivos.length === 0) return;

    statusOcr.textContent = "⏳ Lendo nota... (pode demorar alguns segundos na primeira vez)";
    statusOcr.style.color = "blue";

    try {
        // A forma mais direta e simples para evitar erros de permissão
        const result = await Tesseract.recognize(arquivos[0], 'por', {
            logger: m => {
                if (m.status === 'recognizing text') {
                    statusOcr.textContent = `⏳ Lendo nota: ${Math.round(m.progress * 100)}%`;
                }
            }
        });

        const textoExtraido = result.data.text;
        
        // Remove espaços e quebras de linha para não quebrar a chave
        const chaveLimpa = textoExtraido.replace(/[^0-9]/g, ''); 
        const correspondencia = chaveLimpa.match(/\d{44}/);

        if (correspondencia) {
            echave.value = correspondencia[0];
            statusOcr.textContent = "✅ Chave identificada!";
            statusOcr.style.color = "green";
            verificar();
        } else {
            statusOcr.textContent = "❌ Chave de 44 dígitos não encontrada na imagem.";
            statusOcr.style.color = "red";
        }

    } catch (erro) {
        console.error("Erro detalhado:", erro);
        statusOcr.textContent = "⚠️ Erro: Falha ao carregar motor de leitura.";
        statusOcr.style.color = "red";
    }
});


// --- FUNÇÃO DE COLAR ---
bColar.onclick = async () => {
    try {
        const texto = await navigator.clipboard.readText();
        echave.value = texto.replace(/[^0-9]/g, '');
        verificar();
    } catch (erro) {
        alert("Não foi possível colar o conteúdo");
    }
}

echave.addEventListener("input", () => {
    verificar();
});

// --- LÓGICA DE VALIDAÇÃO E REDIRECIONAMENTO ---
function verificar() {
    const idsParaEsconder = ["link1", "link2", "botoes1", "botoes2", "mensagem", "resultado"];
    idsParaEsconder.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.display = "none";
    });

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

    if (yy === "55") {
        exibirResultadoNfe(universalLink, universalLink2);
    } else if (yy === "59") {
        exibirResultadoSimples(satLinks[uf]);
    } else if (yy === "65") {
        exibirResultadoSimples(nfceLinks[uf]);
    } else {
        escreverMensage("Chave invalida. Tipo de documento desconhecido.");
        return;
    }

    document.getElementById("displayestado").textContent = estadoNomes[uf];
    document.getElementById("displaymes").textContent = mes;
    document.getElementById("displayano").textContent = "20" + ano;
    document.getElementById("displaycnpj").textContent = cnpj;
    document.getElementById("displaysat").textContent = sat;
    document.getElementById("displaynumero").textContent = numero;
}

// --- FUNÇÕES AUXILIARES ---
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

function abrirEcopiar(url) {
    if(!url || url === "#") return;
    let chave = echave.value.replace(/[^0-9]/g, '');
    navigator.clipboard.writeText(chave);
    window.open(url, '_blank');
}

document.getElementById("abrirLink").onclick = () => abrirEcopiar(document.getElementById("link").href);
document.getElementById("abrirLink1").onclick = () => abrirEcopiar(document.getElementById("link21").href);
document.getElementById("abrirLink2").onclick = () => abrirEcopiar(document.getElementById("link22").href);

function escreverMensage(msg) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = msg;
    mensagem.style.display = "block";
    setTimeout(() => { mensagem.style.display = "none"; }, 4000);
}

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
