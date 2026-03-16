import "./App.css";
import { Editor } from "@monaco-editor/react";

const App = () => {
  return (
    <div className="w-screen flex flex-col h-screen">
      <div className="text-2xl font-bold w-full py-2 "> Online Compiler </div>
      <div className="flex flex-row w-full grow">
        <div className="grow text-2xl font-semibold border-2 flex flex-col">
          Code Editor
          <div className="grow">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              defaultValue="// Start coding..."
              theme="vs-dark"
            />
          </div>
        </div>

        <div className="w-100 text-xl font-semibold border-2">
          Run to Compile!
        </div>
      </div>
    </div>
  );
};

export default App;
