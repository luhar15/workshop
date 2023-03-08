import axios from "axios";
import React from "react";
import './App.css';
import { useState, useEffect } from "react";

export default function Table1() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await axios.get("http://localhost:8080/getRes");
          setData(response.data);
        }
        fetchData();
      }, []);
    
      const deleteData = async (id) => {
        try {
          await axios.delete(`http://localhost:8080/Delres/${id}`);
          setData(data.filter((item) => item.id !== id));
        } catch (error) {
          console.log(error);
        }
      };
    
      const updateData = async (id, newData) => {
        try {
          await axios.put(`http://localhost:8080/update/${id}`, newData);
          setData(
            data.map((item) => (item.id === id ? { ...item, ...newData } : item))
          );
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>ResId</th>
                    <th>ResName</th>
                    <th>PopularFood</th>
                    <th>Place</th>
                    <th>rating</th>
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                        <td>{user.resname}</td>
                        <td>{user.popfood}</td>
                        <td>{user.place}</td>
                        <td>{user.rating}</td>
                        <td>
                        <button
                                className="btn btn-primary"
                                onClick={() => deleteData(user.id)}
                            >
                                Delete
                            </button>
                     <button
                className="btn btn-secondary"
                onClick={() => {
                  const newData = prompt("Enter new data:");
                  if (newData) {
                    updateData(user.id, { id: newData });
                  }
                }}
              >
                Update
              </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
