import { getRandomChar } from "./utils";
import toast, { Toaster } from "react-hot-toast";
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
    <main className="flex justify-center items-center h-screen">
      <section className="w-full md:w-2/3 h-4/5 flex flex-col justify-center items-center gap-4">
        <div className=" flex flex-col items-center gap-2 mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-700 text-balance tracking-tight text-center font-bold">
            Password Generator
          </h1>
          <p className="text-sm md:text-md lg:text-lg xl:text-xl text-gray-500 text-balance tracking-tight font-normal text-center w-4/5">
            A Password Generator App creates secure, random passwords based on
            customizable criteria for enhanced online security.
          </p>
        </div>

        <div
          onClick={handleCopyToClipboard}
          className="bg-green-50 transition-colors rounded-xl h-14 border-2 border-dashed border-gray-700 w-4/5 sm:w-2/3 md:w-1/2 text-gray-500 mx-auto flex items-center px-4 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {password}
        </div>

        <div className="h-96 w-4/5 sm:w-2/3 md:w-1/2 mx-auto">
          <div className="flex justify-between mb-2">
            <h3 className="">Character Lenght</h3>
            <h4>{passwordLength}</h4>
          </div>
          <div className="flex justify-center mb-2">
            <input
              type="range"
              min={8}
              max={100}
              value={passwordLength}
              className="range"
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>
          <div className="h-80">
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  checked={isLowercase}
                  onChange={() => {
                    setIsLowercase(!isLowercase);
                  }}
                  className="checkbox"
                />
                <span className="label-text">Include Lowercase Letters</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  checked={isUppercase}
                  onChange={() => {
                    setIsUppercase(!isUppercase);
                  }}
                  className="checkbox"
                />
                <span className="label-text">Include Uppercase Letters</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  checked={isNumbers}
                  onChange={() => {
                    setIsNumbers(!isNumbers);
                  }}
                  className="checkbox"
                />
                <span className="label-text">Include Numbers</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  checked={isSymbols}
                  onChange={() => {
                    setIsSymbols(!isSymbols);
                  }}
                  className="checkbox"
                />
                <span className="label-text">Include Symbols</span>
              </label>
            </div>
            <div className="flex justify-center mt-2">
              <button onClick={generatePassword} className="btn btn-neutral">
                Generate
              </button>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  );
}

export default App;
