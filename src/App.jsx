import { getRandomChar } from "./utils";
import toast, { Toaster } from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import {
  lowerCaseLetters,
  numbers,
  symbols,
  upperCaseLetters,
} from "./constants";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const conditions = [
    {
      label: "Include Lowercase Letters",
      checked: isLowercase,
      setter: setIsLowercase,
    },
    {
      label: "Include Uppercase Letters",
      checked: isUppercase,
      setter: setIsUppercase,
    },
    {
      label: "Include Numbers",
      checked: isNumbers,
      setter: setIsNumbers,
    },
    {
      label: "Include Symbols",
      checked: isSymbols,
      setter: setIsSymbols,
    },
  ];

  // generate Password
  function generatePassword() {
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      if (isLowercase) {
        generatedPassword += getRandomChar(lowerCaseLetters);
      }
      if (isUppercase) {
        generatedPassword += getRandomChar(upperCaseLetters);
      }
      if (isNumbers) {
        generatedPassword += getRandomChar(numbers);
      }
      if (isSymbols) {
        generatedPassword += getRandomChar(symbols);
      }
    }
    let finalPassword = generatedPassword.slice(0, passwordLength);
    setPassword(finalPassword);
  }

  const handleCopyToClipboard = () => {
    if (password.length) {
      navigator.clipboard.writeText(password).then(
        () => {
          toast.success("Copied!");
        },
        (err) => {
          toast.error("Unable to Copy");
        }
      );
    }
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <section className="w-full md:w-2/3 flex flex-col justify-center items-center gap-4 px-4 lg:px-8">
        <div className="flex flex-col items-center gap-2 my-4 md:my-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-700 tracking-tight text-center font-bold">
            KeyCrafter
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 tracking-tight font-normal text-center w-full sm:w-4/5">
            Craft unique, secure keys for ultimate protection online.
          </p>
        </div>

        <div
          onClick={handleCopyToClipboard}
          className="bg-indigo-50 transition-colors rounded-xl h-14 border-2 border-dashed border-gray-700 w-full sm:w-4/5 md:w-1/2 text-gray-500 mx-auto flex items-center px-4 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {password ? password : "Click on generate button"}
        </div>

        <div className="w-full sm:w-4/5 md:w-1/2 mx-auto">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-gray-600">Character Length</h3>
            <h4 className="font-bold text-gray-700">{passwordLength}</h4>
          </div>
          <input
            type="range"
            min={8}
            max={100}
            value={passwordLength}
            className="range w-full mb-4"
            onChange={(e) => setPasswordLength(e.target.value)}
          />

          <div className="grid gap-4">
            {conditions.map((item, idx) => (
              <div key={idx} className="form-control">
                <label className="label cursor-pointer justify-start gap-2">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => item.setter(!item.checked)}
                    className="checkbox"
                  />
                  <span className="label-text">{item.label}</span>
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button onClick={generatePassword} className="btn btn-neutral">
              Generate
            </button>
          </div>
        </div>
      </section>

      <footer className="mt-10 md:mt-20 mb-4">
        <h2 className="text-center text-gray-800 font-semibold">
          Made with <FaHeart className="inline" color="red" /> by{" "}
          <a href="https://sameer-frontend-dev.vercel.app/" className="link">
            Sameer
          </a>
        </h2>
      </footer>

      <Toaster />
    </main>
  );
}

export default App;
