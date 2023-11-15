import './App.css';
import Header from './components/Header/Header'
import Backscreen from './components/Backscreen/Backscreen'
import Super from './components/Super/Super'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Backscreen></Backscreen>
      <Super></Super>
      <div className="footer">
        <a className="wLink" href='https://z4nchez.github.io/portfolio'>By Walter Sanchez</a>
      </div>
    </div>
  );
}

export default App;
