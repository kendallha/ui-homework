// import { useState } from 'react'
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <table>
        <thead>
          <th>Name</th>
          <th>Device</th>
          <th>Path</th>
          <th>Status</th>
        </thead>
        <tbody>
          <tr>
            <td>smss.exe</td>
            <td>smss.exe</td>
            <td>smss.exe</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>smss.exe</td>
            <td>smss.exe</td>
            <td>smss.exe</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>smss.exe</td>
            <td>smss.exe</td>
            <td>smss.exe</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>smss.exe</td>
            <td>smss.exe</td>
            <td>smss.exe</td>
            <td>Unavailable</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
