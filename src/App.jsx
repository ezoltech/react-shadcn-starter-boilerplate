import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import shadcnLogo from "/shadcn.svg";
import jsLogo from "/js.svg";
import tailWind from "/tailwind.svg";
import router from "/router.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center text-slate-200">
      <div className="flex-col gap-3">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col  gap-1">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
              <h1 className="text-3xl font-bold">Vite</h1>
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
              <h1 className="text-3xl font-bold text-[#61dbfb]">React</h1>
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <a
              href="https://ui.shadcn.com/docs/installation/vite"
              target="_blank"
            >
              <img src={shadcnLogo} className="logo shadcn" alt="ShadCN logo" />
            </a>
            <h1 className="text-3xl font-bold">Shadcn</h1>
          </div>

          <div className="flex flex-col gap-1">
            <a href="https://tailwindcss.com/" target="_blank">
              <img
                src={tailWind}
                className="logo tailwind"
                alt="Tailwind css logo"
              />
            </a>
            <h1 className="text-3xl font-bold text-[#2a8ac1]">Tailwind</h1>
          </div>
          <div className="flex flex-col gap-1">
            <a href="https://reactrouter.com/en/main" target="_blank">
              <img
                src={router}
                className="logo react-router-dom"
                alt="JavaScript logo"
              />
            </a>
            <h1 className="text-3xl font-bold">
              <span className="text-red-500">
                <span className="text-white">React </span> Router
              </span>{" "}
            </h1>
          </div>

          <div className="flex flex-col gap-1">
            <a href="https://www.javascript.com/" target="_blank">
              <img src={jsLogo} className="logo js" alt="JavaScript logo" />
            </a>
            <h1 className="text-3xl font-bold text-yellow-400">Javascript</h1>
          </div>
        </div>
        <br />
        <h2 className="text-2xl  flex items-center flex-row gap-2">
          Starter Template Prepared By{" "}
          <a
            className="font-bold text-amber-700"
            href="https://ezoltech.netlify.app"
          >
            EzolTech
          </a>
        </h2>
      </div>
    </div>
  );
}

export default App;
