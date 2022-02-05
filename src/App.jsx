import "./styles/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemDetailContainer/ItemCount";
function App() {
  const initial=1
  const max=10
  return (
    <>
    

    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Hola a todos!"}/>
      <ItemCount initial={initial} max={max}/>
    </div>
    </>
  );
}

export default App;
