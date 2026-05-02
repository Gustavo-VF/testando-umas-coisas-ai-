// ======================================================
// MANTENHA SEUS DICIONÁRIOS AQUI (satLinks, nfceLinks, etc)
const satLinks = {
    "11": "https://sistemas.sefaz.ro.gov.br/",
    "12": "https://www.sefaz.ac.gov.br/sat/",
    "13": "https://sistemas.sefaz.am.gov.br/nfceweb/formConsulta.do",
    "14": "https://www.sefaz.rr.gov.br/nfc-e",
    "15": "https://app.sefa.pa.gov.br/consulta-nfce/#/consulta",
    "16": "https://www.sefaz.ap.gov.br/sate/seg/SEGf_AcessarFuncao.jsp?cdFuncao=FIS_1261",
    "17": "http://www.sefaz.to.gov.br/nfce/consulta.jsf",
    "21": "http://www.nfce.sefaz.ma.gov.br/portal/consultarnfce.jsp",
    "22": "https://www.sefaz.pi.gov.br/nfce/qrcode",
    "23": "https://cfe.sefaz.ce.gov.br/mfe/servicos#/cupom-fiscal",
    "24": "http://nfce.set.rn.gov.br/consultarNFCe.aspx",
    "25": "https://www.sefaz.pb.gov.br/servirtual/documentos-fiscais/nfc-e/consultar-nfc-e",
    "26": "http://nfe.sefaz.pe.gov.br/nfe-web/consNfe",
    "27": "https://nfce.sefaz.al.gov.br/consultaNFCe.htm",
    "28": "https://nfce.sefaz.se.gov.br/portal/portalNoticias.jsp?jsp=barra-menu/servicos/consultaDANFENFCe.htm",
    "29": "http://nfe.sefaz.ba.gov.br/servicos/nfce/Modulos/Geral/NFCEC_consulta_chave_acesso.aspx",
    "31": "http://nfce.fazenda.mg.gov.br/portalnfce/sistema/consultaarg.xhtml",
    "32": "http://app.sefaz.es.gov.br/ConsultaNFCe/Default.aspx",
    "33": "https://consultadfe.fazenda.rj.gov.br/consultaDFe/paginas/consultaChaveAcesso.faces",
    "35": "https://satsp.fazenda.sp.gov.br/COMSAT/Public/ConsultaPublica/ConsultaPublicaCfe.aspx",
    "41": "https://sped.fazenda.pr.gov.br/NFCe/webservices/sped/nfce/completa",
    "42": "https://sat.sef.sc.gov.br/tax.net/Sat.Dfe.NFCe.Web/Consultas/ConsultaPublicaNFCe.aspx",
    "43": "https://www.sefaz.rs.gov.br/NFE/NFE-NFC.aspx",
    "50": "http://www.dfe.ms.gov.br/nfce/consulta/",
    "51": "https://www.sefaz.mt.gov.br/nfce/consultanfce",
    "52": "https://www.go.gov.br/servicos/servico/consultar-nota-fiscal-eletronica-pela-chave-de-acesso",
    "53": "https://ww1.receita.fazenda.df.gov.br/servicos"
};

const nfceLinks = {
    "11": "https://www.nfce.sefin.ro.gov.br/",
    "12": "https://www.sefaznet.ac.gov.br/nfce/consulta",
    "13": "https://sistemas.sefaz.am.gov.br/nfceweb/formConsulta.do",
    "14": "https://www.sefaz.rr.gov.br/nfce/servlet/wp_consulta_nfce",
    "15": "https://app.sefa.pa.gov.br/consulta-nfce/#/consulta",
    "16": "https://www.sefaz.ap.gov.br/sate/seg/SEGf_AcessarFuncao.jsp?cdFuncao=FIS_1261",
    "17": "http://www.sefaz.to.gov.br/nfce/consulta.jsf",
    "21": "http://www.nfce.sefaz.ma.gov.br/portal/consultarnfce.jsp",
    "22": "https://www.sefaz.pi.gov.br/nfce/qrcode",
    "23": "http://nfce.sefaz.ce.gov.br/pages/consultaNota.jsf",
    "24": "http://nfce.set.rn.gov.br/consultarNFCe.aspx",
    "25": "https://www.sefaz.pb.gov.br/servirtual/documentos-fiscais/nfc-e/consultar-nfc-e",
    "26": "https://nfce.sefaz.pe.gov.br:444/nfce-web/consNfce",
    "27": "https://nfce.sefaz.al.gov.br/consultaNFCe.htm",
    "28": "https://nfce.sefaz.se.gov.br/portal/portalNoticias.jsp?jsp=barra-menu/servicos/consultaDANFENFCe.htm",
    "29": "http://nfe.sefaz.ba.gov.br/servicos/nfce/default.aspx",
    "31": "http://nfce.fazenda.mg.gov.br/portalnfce/sistema/consultaarg.xhtml",
    "32": "http://app.sefaz.es.gov.br/ConsultaNFCe/Default.aspx",
    "33": "https://consultadfe.fazenda.rj.gov.br/consultaDFe/paginas/consultaChaveAcesso.faces",
    "35": "https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaPublica.aspx",
    "41": "https://sped.fazenda.pr.gov.br/NFCe/webservices/sped/nfce/completa",
    "42": "https://sat.sef.sc.gov.br/tax.net/Sat.Dfe.NFCe.Web/Consultas/ConsultaPublicaNFCe.aspx",
    "43": "https://www.sefaz.rs.gov.br/NFE/NFE-NFC.aspx",
    "50": "http://www.dfe.ms.gov.br/nfce/consulta/",
    "51": "http://www.sefaz.mt.gov.br/nfce/consultanfce",
    "52": "http://nfe.sefaz.go.gov.br/nfeweb/sites/nfe/consulta-completa",
    "53": "https://ww1.receita.fazenda.df.gov.br/servicos"
};


const mesNome = {
    "01": "Jan",
    "02": "Fev",
    "03": "Mar",
    "04": "Abr",
    "05": "Mai",
    "06": "Jun",
    "07": "Jul",
    "08": "Ago",
    "09": "Set",
    "10": "Out",
    "11": "Nov",
    "12": "Dez"
};
const estadoNomes = {
    "11": "Rondônia",
    "12": "Acre",
    "13": "Amazonas",
    "14": "Roraima",
    "15": "Pará",
    "16": "Amapá",
    "17": "Tocantins",
    "21": "Maranhão",
    "22": "Piauí",
    "23": "Ceará",
    "24": "Rio Grande do Norte",
    "25": "Paraíba",
    "26": "Pernambuco",
    "27": "Alagoas",
    "28": "Sergipe",
    "29": "Bahia",
    "31": "Minas Gerais",
    "32": "Espírito Santo",
    "33": "Rio de Janeiro",
    "35": "São Paulo",
    "41": "Paraná",
    "42": "Santa Catarina",
    "43": "Rio Grande do Sul",
    "50": "Mato Grosso do Sul",
    "51": "Mato Grosso",
    "52": "Goiás",
    "53": "Distrito Federal"
};

// ========================================================

// --- VARIÁREIS DE INTERFACE (Declarar apenas uma vez) ---
// ========================================================

const bColar = document.getElementById("bColar");
const bColarImagem = document.getElementById("bColarImagem");
const echave = document.getElementById("chave");
const inputImagem = document.getElementById("inputImagem");
const statusOcr = document.getElementById("statusOcr");
const dropZone = document.getElementById("dropZone");

const universalLink = "https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ%20gAVw2g=";
const universalLink2 = "https://meudanfe.com.br/#";

// --- FUNÇÃO CENTRAL DE LEITURA DE IMAGEM ---
async function lerNota(arquivo) {
    if (!arquivo) return;
    statusOcr.textContent = "⏳ Lendo imagem... aguarde.";
    statusOcr.style.color = "blue";

    try {
        const result = await Tesseract.recognize(arquivo, 'por+eng');
        const chaveLimpa = result.data.text.replace(/[^0-9]/g, '');
        
        // Busca TODAS as sequências de 44 dígitos e valida a UF
        const ufsValidas = Object.keys(estadoNomes);
        const matches = chaveLimpa.match(/\d{44}/g) || [];
        
        // Tenta encontrar uma que começa com UF válida
        const chaveValida = matches.find(m => ufsValidas.includes(m.slice(0, 2)));

        // Se não achou, tenta deslizar pela string inteira procurando UF válida
        let chave = chaveValida;
        if (!chave) {
            for (let i = 0; i <= chaveLimpa.length - 44; i++) {
                const candidata = chaveLimpa.slice(i, i + 44);
                if (ufsValidas.includes(candidata.slice(0, 2))) {
                    chave = candidata;
                    break;
                }
            }
        }

        if (chave) {
            echave.value = chave;
            statusOcr.textContent = "✅ Chave identificada!";
            statusOcr.style.color = "green";
            verificar();
        } else {
            statusOcr.textContent = "❌ Chave de 44 dígitos não encontrada.";
            statusOcr.style.color = "red";
        }
    } catch (erro) {
        console.error(erro);
        statusOcr.textContent = "⚠️ Erro ao processar imagem.";
        statusOcr.style.color = "orange";
    }
}
// --- ARRASTAR E SOLTAR ---
['dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
});

dropZone.addEventListener('dragover', () => dropZone.classList.add('dragover'));
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));

dropZone.addEventListener('drop', (e) => {
    dropZone.classList.remove('dragover');
    const arquivo = e.dataTransfer.files[0];
    lerNota(arquivo);
});

// --- BOTÃO COLAR IMAGEM ---
bColarImagem.onclick = async () => {
    try {
        const itens = await navigator.clipboard.read();
        for (const item of itens) {
            if (item.types.some(type => type.startsWith('image/'))) {
                const blob = await item.getType(item.types.find(t => t.startsWith('image/')));
                lerNota(blob);
                return;
            }
        }
        alert("Nenhuma imagem encontrada na área de transferência.");
    } catch (err) {
        alert("Erro ao acessar clipboard. Tente Ctrl+V.");
    }
};

// --- CLIQUE NO INPUT DE ARQUIVO ---
inputImagem.addEventListener("change", (e) => lerNota(e.target.files[0]));

// --- COLAR TEXTO ---
bColar.onclick = async () => {
    try {
        const texto = await navigator.clipboard.readText();
        echave.value = texto.replace(/[^0-9]/g, '');
        verificar();
    } catch (erro) {
        alert("Não foi possível colar o conteúdo");
    }
}

echave.addEventListener("input", () => verificar());

// --- LÓGICA DE VALIDAÇÃO E REDIRECIONAMENTO ---
function verificar() {
    const idsParaEsconder = ["link1", "link2", "botoes1", "botoes2", "mensagem", "resultado"];
    idsParaEsconder.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });

    let chave = echave.value.replace(/[^0-9]/g, '');

    if (chave.length < 44) return;
    if (chave.length > 44) {
        escreverMensage("Chave inválida. Verifique os dígitos.");
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
        escreverMensage("Chave inválida. Mês inválido.");
        return;
    }

    if (!estadoNomes[uf]) {
        escreverMensage("Chave inválida. UF não reconhecida.");
        return;
    }

    if (yy === "55") {
        exibirResultadoNfe(universalLink, universalLink2);
    } else if (yy === "59") {
        exibirResultadoSimples(satLinks[uf]);
    } else if (yy === "65") {
        exibirResultadoSimples(nfceLinks[uf]);
    } else {
        escreverMensage("Chave inválida. Tipo de documento desconhecido.");
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
    if (!url || url === "#") return;
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
