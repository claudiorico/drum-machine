let powerOn = true;
let bankOn = true;

function getAudio(key) {
  let audioFile = {};
  if (bankOn) {
    audioFile = audioList.find((item) => {
      return item.keyTrigger === key;
    });
  } else {
    audioFile = audioListd.find((item) => {
      return item.keyTrigger === key;
    });
  }
  return audioFile;
}

function onPadClick(input) {
  if (!powerOn) {
    console.log("PowerOff");
    return;
  }
  const audio = document.getElementById(`${input}`);
  const volume = document.getElementById("iVolume");
  const display = document.getElementById("display");
  const audioFile = getAudio(input);

  display.innerHTML = audioFile.id;
  audio.src = audioFile.url;

  audio.volume = Number(volume.value);
  audio.play();
}

const onKeyPress = (event) => {
  let keypressed;

  event.preventDefault();
  switch (event.key) {
    case "q" || "Q":
      keypressed = "Q";
      break;
    case "w" || "W":
      keypressed = "W";
      break;
    case "e" || "E":
      keypressed = "E";
      break;
    case "a" || "A":
      keypressed = "A";
      break;
    case "s" || "S":
      keypressed = "S";
      break;
    case "d" || "D":
      keypressed = "D";
      break;
    case "z" || "Z":
      keypressed = "Z";
      break;
    case "x" || "X":
      keypressed = "X";
      break;
    case "c" || "C":
      keypressed = "C";
      break;
    default:
      break;
  }
  onPadClick(keypressed);
  console.log(audioList[0]);
};

function onClickPower(e) {
  console.log("Power");
  if (e.currentTarget.id === "powerOn") {
    document.getElementById("powerOff").classList.remove("off");
    document.getElementById("powerOn").classList.add("off");
    powerOn = false;
  } else {
    document.getElementById("powerOff").classList.add("off");
    document.getElementById("powerOn").classList.remove("off");
    powerOn = true;
  }
}
function onClickBank(e) {
  console.log("Power");
  const display = document.getElementById("display");
  if (e.currentTarget.id === "bankOn") {
    document.getElementById("bankOff").classList.remove("off");
    document.getElementById("bankOn").classList.add("off");
    bankOn = false;
    display.innerText = "Smooth Piano Kit";
  } else {
    document.getElementById("bankOff").classList.add("off");
    document.getElementById("bankOn").classList.remove("off");
    bankOn = true;
    display.innerText = "Heater Kit";
  }
}

document.getElementById("powerOn").addEventListener("click", onClickPower);
document.getElementById("powerOff").addEventListener("click", onClickPower);
document.getElementById("bankOn").addEventListener("click", onClickBank);
document.getElementById("bankOff").addEventListener("click", onClickBank);

//body.addEventListener("load", inicializacao);
const inicializacao = () => {
  document.getElementById("powerOff").classList.add("off");
  document.getElementById("bankOff").classList.add("off");
};

window.onload = inicializacao;
document.addEventListener("keypress", onKeyPress);
