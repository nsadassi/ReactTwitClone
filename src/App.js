import './App.css';
import Sidebar from './sidebar/Sidebar';
import Feed from './feed/Feed';
import Widgets from './widgets/Widgets';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* feed */}
      <Feed />
      {/* right widgets */}
      <Widgets />
    </div>
  );
}

export default App;
