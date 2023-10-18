'use client'

import React, { useState } from "react";
import { Card, CardBody, Input, Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation'; // Corrected import

export default function Home() {
  const router = useRouter();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    // Use template literals for string interpolation and correct query parameter formatting
    if(date && time) {
    router.push(`/dashboard?date=${date}&time=${time}`);
    }
  };

  return (
    <div className="grid grid-cols-1 justify-items-center min-h-screen bg-blue-950">
      <h1 className="mt-8 font-black text-2xl text-blue-300">Enter Your Date and Time of Birth</h1>
      <Card className="grid grid-cols-1 place-items-center h-[170px] w-[200px] bg-gradient-radial from-blue-700 to-blue-950 to-70%">
        <CardBody className="text-black">
          <Input id="date" type="date" value={date} onChange={event => setDate(event.target.value)} />
        </CardBody>
      </Card>

      <Card className="grid grid-cols-1 place-items-center h-[170px] w-[200px] bg-gradient-radial from-blue-700 to-blue-950 to-70%">
        <CardBody className="text-black">
          <Input id="time" type="time" value={time} onChange={event => setTime(event.target.value)} />
        </CardBody>
      </Card>

      <Button type="button" className="text-blue-300 font-black h-[170px] w-[200px] bg-gradient-radial from-blue-700 to-blue-950 to-70% hover:bg-gradient-radial hover:from-blue-600 hover:to-blue-950 hover:to-70% border-none" style = {{
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
      }} onClick={handleSubmit}>
        SUBMIT
      </Button>
    </div>
  );
}
