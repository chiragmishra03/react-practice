import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './Card.jsx';
import data from './data.js';
function App() {
  const [users, setUsers] = useState(data);
  const [totalsalary, setTotalSalary] = useState(0);
  useEffect(() => {
    calculateSalary();
  }, [users]);
  const calculateSalary = () => {
    const sum = users.reduce((acc, user) => {
      return acc + user.salary;
    }, 0);
    setTotalSalary(sum);
  };
  const HandleDelete = (name) => {
    let newUsers = users.filter((user) => {
      return user.name != name;
    });
    setUsers(newUsers);
  };
  return (
    <>
      <h1>TotalSalary: {totalsalary}</h1>
      <div>List of all user</div>
      {users.map((user) => {
        return <Card user={user} HandleDelete={HandleDelete} />;
      })}
    </>
  );
}

export default App;
