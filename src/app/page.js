'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React, { useState, useEffect } from 'react';

export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://172.31.31.62:4000/api/v1/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQHR5cmVwbGV4LmNvbSIsImlhdCI6MTY4MzUzNjIxNiwiZXhwIjoxNjgzNzA5MDE2fQ.QO6kKP8d4R3A4TyfpwJOQgo0Jbd-E36qlBp3gImJzFg"
        }
      })
      const json = await response.json();
      setData(json);
    }
    fetchData();

  }, []);


  return (
    <div>
      {data !== null ? (
        <div>
          <p>Message: {data.headers.message}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
