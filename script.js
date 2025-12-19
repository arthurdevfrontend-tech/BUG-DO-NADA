/*
====================================================
EASTER EGG — O SOL REAL ☀️

se você está lendo isso:
o sol não queima.
o sol compila.
cada clique trava uma thread solar.

não conte pra ninguém.
isso nunca existiu.
====================================================
*/

const FINAL_NUMBER = BigInt(
  "100000000000000000000000000000000000000000000000000000"
);

let points = localStorage.getItem("points")
  ? BigInt(localStorage.getItem("points"))
  : 0n;

let chaos = false;
let cry = false;
let secretUnlocked = false;

// ELEMENTOS
const pointsText = document.getElementById("points");
const statusText = document.getElementById("status");
const log = document.getElementById("log");

// SONS (vindos do HTML)
const sounds = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];

// INICIAL
pointsText.textContent = points.toString();

// MEMES ABSURDOS
const memes = [
  "isso é culpa sua",
  "ninguém mandou clicar",
  "olha o que você fez",
  "era melhor ter parado",
  "o código suspirou",
  "o botão te julgou",
  "isso saiu do controle",
  "ninguém revisou isso",
  "seu cérebro pediu férias",
  "isso não é entretenimento",
  "o javascript chorou",
  "ninguém vai acreditar",
  "isso virou um ritual",
  "era só um botão",
  "parabéns, agora aguenta",
  "o erro foi intencional",
  "você clicou sabendo",
  "ninguém sai ileso",
  "isso não tem explicação",
  "acabou mas continua",
];

// FUNÇÕES UTIL
function randomSound(times = 1) {
  for (let i = 0; i < times; i++) {
    setTimeout(() => {
      const s = sounds[Math.floor(Math.random() * sounds.length)];
      s.currentTime = 0;
      s.play();
    }, i * 120);
  }
}

function chaosEffect() {
  document.body.style.transform = `rotate(${Math.random() * 10 - 5}deg) scale(${
    1 + Math.random() * 0.15
  })`;
  document.body.style.filter = `hue-rotate(${Math.random() * 360}deg) blur(${
    Math.random() * 3
  }px)`;
}

// SAVE LEGÍTIMO
function markLegit() {
  localStorage.setItem("legitProgress", "true");
}

function isCheater() {
  return localStorage.getItem("legitProgress") !== "true";
}

// CRASH VISUAL FAKE
function fakeCrashVisual() {
  randomSound(5);
  let flashes = 0;

  const crash = setInterval(() => {
    document.body.style.background = `rgb(${Math.random() * 255},${
      Math.random() * 255
    },${Math.random() * 255})`;

    document.body.style.transform = `rotate(${
      Math.random() * 20 - 10
    }deg) scale(${1 + Math.random() * 0.3})`;

    document.body.style.filter = `invert(${Math.random()}) blur(${
      Math.random() * 5
    }px)`;

    statusText.textContent = [
      "ERRO FATAL",
      "NÃO FECHE O NAVEGADOR",
      "JS PAROU DE RESPIRAR",
      "SOCORRO",
      "POR QUE VOCÊ FEZ ISSO?",
    ][Math.floor(Math.random() * 5)];

    flashes++;
    if (flashes > 15) {
      clearInterval(crash);
      document.body.style.background = "black";
      document.body.style.transform = "none";
      document.body.style.filter = "none";
      statusText.textContent = "relaxa. era mentira.";
    }
  }, 120);
}

// FINAL SECRETO
function checkFinalSecret() {
  if (points >= FINAL_NUMBER && !secretUnlocked) {
    secretUnlocked = true;
    triggerFinalSecret();
  }
}

function triggerFinalSecret() {
  const cheater = isCheater();

  document.body.innerHTML = `
    <div style="
      font-family: Comic Neue, cursive;
      background:black;
      color:white;
      min-height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      padding:20px;
    ">
      <h1 style="font-family:Rubik Glitch;color:red;">
        🪲 FINAL SECRETO
      </h1>

      ${
        cheater
          ? `
          <p style="color:#ffcc00;">opa.</p>
          <p>abriu o console né? 😏</p>
          <p>tudo bem.</p>
          <p>eu faria o mesmo.</p>
          <p style="font-size:12px;color:#777;">
            (mas a gente sabe.)
          </p>
        `
          : `
          <p>você clicou tudo isso.</p>
          <p>isso é preocupante.</p>
        `
      }

      <p style="margin-top:20px;">
        você zerou o nada.
      </p>

      <p style="margin-top:30px;color:#ff004c;">
        isso não te deu nada.
      </p>

      <p style="margin-top:40px;font-size:12px;color:#777;">
        agora fecha o site.<br>
        sério.
      </p>
    </div>


      <button id="ohStupid"
        style="
          margin-top:30px;
          padding:20px;
          font-size:20px;
          background:red;
          color:white;
          border:none;
          border-radius:10px;
          cursor:pointer;
        ">
        OH STUPID
      </button>

      <p style="margin-top:20px;font-size:12px;color:#777;">
        não era pra você chegar aqui.
      </p>
    </div>

  `;

  
  document.getElementById("ohStupid").onclick = () => {
    document.body.style.filter = "invert(1)";
    document.body.style.transform = "rotate(180deg)";
    alert("isso não fez nada.\nmas você clicou mesmo assim.");
  };

  randomSound(10);
  localStorage.clear();
}

// CLIQUE PRINCIPAL
document.getElementById("doNothing").onclick = () => {
  points += 1n;
  localStorage.setItem("points", points.toString());
  markLegit();

  pointsText.textContent = points.toString();

  const meme = memes[Math.floor(Math.random() * memes.length)];
  statusText.textContent = meme;
  log.innerHTML = "🪲 " + meme + "<br>" + log.innerHTML;

  randomSound();

  if (chaos) chaosEffect();
  if (cry) document.body.style.animation = "shake 0.08s infinite";

  if (points % 37n === 0n) fakeCrashVisual();

  checkFinalSecret();
};

// BOTÕES
document.getElementById("chaosBtn").onclick = () => {
  chaos = !chaos;
  statusText.textContent = chaos
    ? "CAOS TOTAL ATIVADO."
    : "caos desligado (fraco)";
};

document.getElementById("cryBtn").onclick = () => {
  cry = !cry;
  statusText.textContent = cry
    ? "NINGUÉM SAI ILESO"
    : "você sobreviveu (mentira)";
};

// DEVTOOLS EM TEMPO REAL
let devtoolsOpen = false;

(function detectDevTools() {
  const threshold = 160;
  setInterval(() => {
    const opened =
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold;

    if (opened && !devtoolsOpen) {
      devtoolsOpen = true;
      statusText.textContent = "👀 abriu o devtools né?";
    }

    if (!opened && devtoolsOpen) {
      devtoolsOpen = false;
      statusText.textContent = "🙂 obrigado por fechar.";
    }
  }, 800);
})();

// MOBILE ZOEIRA
function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobile()) {
  setTimeout(() => {
    statusText.textContent = "📱 jogando no celular?? coragem.";
    log.innerHTML =
      "🪲 isso foi feito errado.<br>" +
      "🪲 inclusive pra celular.<br>" +
      log.innerHTML;
  }, 1200);
}

// CLIQUE RÁPIDO ABSURDO
let lastClickTime = 0;

btn.onclick = () => {
  const now = performance.now();
  const diff = now - lastClickTime;

  lastClickTime = now;

  // DETECÇÃO DE "NANO SEGUNDO" (absurdo)
  if (diff < 30) {
    statusText.textContent = "🏆 PARABÉNS. ISSO FOI RIDICULAMENTE RÁPIDO.";
    log.innerHTML = "⚡ clique impossível detectado.<br>" + log.innerHTML;
    randomSound();
  }

  points += 1n;
  localStorage.setItem("points", points.toString());
  markLegit();

  pointsText.textContent = points.toString();

  const meme = memes[Math.floor(Math.random() * memes.length)];
  statusText.textContent = meme;
  log.innerHTML = "🪲 " + meme + "<br>" + log.innerHTML;

  randomSound();

  if (chaos) chaosEffect();
  if (cry) document.body.style.animation = "shake 0.1s infinite";

  checkFinalSecret();
};
