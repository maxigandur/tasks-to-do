import "./App.css"
import NotesProvider from "./Context/NotesProvider";
import Main from "./Main/Main";

function App() {
  return (
    <NotesProvider>
    <div className="App">
      <Main/>
    </div>
    </NotesProvider>
  );
}

export default App;
