// import Temp from './components/Temp';
import Clock from './components/Clock';
import Search from './components/Search';

function App() {
  return (
    <div className="App h-screen bg-gray-800 text-white flex flex-col md:flex-row space-y-16 md:space-x-16 justify-center items-center">
      <Clock />
      <div className="flex flex-col space-y-12">
        <Search />
      </div>
    </div>
  );
}

export default App;