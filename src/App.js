import "./App.css";
const bankOne = [
  {
    id: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    id: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    id: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    id: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    id: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    id: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    id: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    id: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (e) => {
      playSound(e.key.toUpperCase());
    });
  });

  const playSound = (id) => {
    let clickedKey = document.getElementById(`audio-${id}`);
    let audioToPlay = document.getElementById(id);
    let displayText = document.getElementById("display");
    displayText.innerText = id;

    audioToPlay.currentTime = 0;
    audioToPlay.play();

    clickedKey.classList.add("clicked");
    setTimeout(() => {
      clickedKey.classList.remove("clicked");
    }, 200);
  };

  const Btn = ({ id, url }) => {
    return (
      <div
        className="drum-pad"
        id={`audio-${id}`}
        onClick={() => playSound(id)}
      >
        <i>{id}</i>
        <audio className="clip" src={url} id={id} />
      </div>
    );
  };
  return (
    <div id="drum-machine">
      <div className="NxN">
        {bankOne.map((bank) => {
          return <Btn id={bank.id} url={bank.url} />;
        })}
      </div>

      <div class="mode">
        <input type="checkbox" name="" />
        <h1 id="display"></h1>
      </div>
    </div>
  );
}

export default App;
