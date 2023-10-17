'use client'

import React, {useEffect} from "react"
import Image from 'next/image'
import {Card, CardBody} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import {withRouter} from 'next/router'

export default function Dashboard({
  searchParams,
}: {
  searchParams: {
    date : string;
    time : string;
  };
}) {
  function calculate() {
    const date = new Date();
    
    // Retrieving components of the date
    const startYear = date.getFullYear(); // Returns the year (4 digits for 4-digit years)
    const startMonth = date.getMonth() + 1; // Returns the month (0-11) so we add 1 for a human-readable format (1-12)
    const startDay = date.getDate(); // Returns the day of the month (1-31)
    const startHour = date.getHours(); // Returns the hour (0-23)
    const startMinute = date.getMinutes(); // Returns the minutes (0-59)
  
    const endDate = searchParams.date.split("-");
    const endTime = searchParams.time.split(":");

    const endYear = parseInt(endDate[0]);
    const endMonth = parseInt(endDate[1]);
    const endDay = parseInt(endDate[2]);

    const endHour = parseInt(endTime[0]);
    const endMinute = parseInt(endTime[1]);

    const Year = startYear - endYear ;
    const Month = startMonth - endMonth;
    const Day = startDay - endDay;
    const Hour = startHour - endHour;
    const Minute = startMinute - endMinute;

    const newMinute = Minute / 60 / 24 / 30.4375 / 365.2421875;
    const newHour = Hour / 24 / 30.4375 / 365.2421875;
    const newDay = Day / 30.4375 / 365.2421875;
    const newMonth = Month / 365.2421875;

    const final = Year + newMonth + newDay + newHour + newMinute;

    console.log("Final value: ", final);
    return final;
  }
  const final = calculate()
  return (
    <div className="grid place-items-center min-h-screen">
      <Card className="bg-black">
        <CardBody>
            <p>
             {final}
            </p>
        </CardBody>
      </Card>
    </div>
  )
}
