// RemoteLandingPage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../../sharedComponents/src/Header/Header';
import Footer from '../../sharedComponents/src/Footer/Footer';
import LocalButton from './Button';
import RemoteComponent from './RemoteComponent';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

function RemoteLandingPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://65c380e839055e7482c10bde.mockapi.io/microfront/api/v1/test',
        );
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="RemoteLandingPage">
      <Header />
      <h1>Basic Host-Remote</h1>
      <h2>Remote</h2>
      <LocalButton />
      <RemoteComponent info="des utilisateur du club" />
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Front</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <img src={item.avatar} alt="Avatar" />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.front}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Footer />
    </div>
  );
}

export default RemoteLandingPage;
