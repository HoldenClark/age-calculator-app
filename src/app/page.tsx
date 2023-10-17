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
    router.push(`/dashboard?date=${date}&time=${time}`);
  };

  return (
    <div className="flex min-h-screen">
      <Card className="basis-1/4 h-12 bg-black border-solid border-4 border-white">
        <CardBody className="text-black">
          {/* Moved the placeholder outside of the Input component */}
          <p></p>
          <Input id="date" type="date" value={date} onChange={event => setDate(event.target.value)} />
        </CardBody>
      </Card>

      <Card className="basis-1/4 h-12 bg-black border-solid border-4 border-white">
        <CardBody className="text-black">
          <p></p> {/* Corrected the placeholder text */}
          <Input id="time" type="time" value={time} onChange={event => setTime(event.target.value)} />
        </CardBody>
      </Card>

      <Button type="button" className="basis-1/4 h-12 bg-pink-500 border-solid border-4 border-white" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </div>
  );
}
