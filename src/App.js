
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {

  const arr = [
    {
      name: "vikas",
      age: 23
    },
    {
      name: "bush",
      age: 18
    }
  ]

  return (
    <div className="App">
      <AddUser />
      <UserList arr={arr}/>
    </div>
  );
}

export default App;
