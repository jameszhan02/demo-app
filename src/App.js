import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table'
const url = "http://localhost:8080";

export default function App(){
  const [table, setTables] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url + "/tables")
      console.log(response);
      setTables(response.data.data.tables);
    }
    fetchData();
  }, []);
  
  return (
    <div>
      {table !== "" ? <Table table={table}/>: null}
    </div>
  )
}