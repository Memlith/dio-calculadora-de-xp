portadorDoAnel = { nome: "Frodo", xp: 0, vitorias: 5, derrotas: 2 };
reiDeGondor = { nome: "Aragorn", xp: 5000, vitorias: 58, derrotas: 11 };
oCinzento = { nome: "Gandalf", xp: 8000, vitorias: 111, derrotas: 24 };

function fichaDoPersonagem(ficha) {
  console.log(`Nome: ${ficha.nome}`);
  console.log(`XP: ${ficha.xp}`);
  console.log(`Saldo: ${ficha.vitorias - ficha.derrotas}`);
  console.log(`Nivel: ${calcularVitorias(ficha.vitorias, ficha.derrotas)}`);
  console.log("-----------------------");
}

function calcularVitorias(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel = "";
  if (saldo <= 10) {
    nivel = "Hobbit";
  } else if (saldo <= 20) {
    nivel = "Anão";
  } else if (saldo <= 50) {
    nivel = "Homem";
  } else if (saldo <= 80) {
    nivel = "Elfo";
  } else if (saldo <= 90) {
    nivel = "Mago";
  } else if (saldo <= 100) {
    nivel = "Maia";
  } else {
    nivel = "Vala";
  }

  return nivel;
}

fichaDoPersonagem(portadorDoAnel);
fichaDoPersonagem(reiDeGondor);
fichaDoPersonagem(oCinzento);
