'use client'

import React, {useState, useEffect} from "react"
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
}) 
{
  const [final, setFinal] = useState<number>(0);

  useEffect(() => {
  let animationFrameId: number;
  const calculate = () => {
    const date = new Date();
    
    // Retrieving components of the date
    const startYear = date.getFullYear(); // Returns the year (4 digits for 4-digit years)
    const startMonth = date.getMonth() + 1; // Returns the month (0-11) so we add 1 for a human-readable format (1-12)
    const startDay = date.getDate(); // Returns the day of the month (1-31)
    const startHour = date.getHours(); // Returns the hour (0-23)
    const startMinute = date.getMinutes(); // Returns the minutes (0-59)
    const startSeconds = date.getSeconds();
    const startMilliseconds = date.getMilliseconds();

    //console.log("Start Date:", startYear, startMonth, startDay, startHour, startMinute);
  
    const endDate = searchParams.date.split("-");
    const endTime = searchParams.time.split(":");

    const endYear = parseInt(endDate[0]);
    const endMonth = parseInt(endDate[1]);
    const endDay = parseInt(endDate[2]);

    const endHour = parseInt(endTime[0]);
    const endMinute = parseInt(endTime[1]);

    //console.log("End Date:", endYear, endMonth, endDay, endHour, endMinute);

    const Year = startYear - endYear ;
    const Month = startMonth - endMonth;
    const Day = startDay - endDay;
    const Hour = startHour - endHour;
    const Minute = startMinute - endMinute;

    console.log("Differences:", Year, Month, Day, Hour, Minute, startSeconds , startMilliseconds);

    const newMilli = startMilliseconds / 1000 / 60 / 60 / 24 / 365.2421875;
    const newSecond = startSeconds / 60 / 60 / 24 / 365.2421875;
    const newMinute = Minute / 60 / 24 / 365.2421875;
    const newHour = Hour / 24 / 365.2421875;
    const newDay = Day / 365.2421875;
    const newMonth = Month / 12;

    //console.log("Calculated Years:", newMinute, newHour, newDay, newMonth);

    const final = Year + newMonth + newDay + newHour + newMinute + newSecond + newMilli;

    //console.log("Final value: ", final);
    setFinal(final);

    animationFrameId = requestAnimationFrame(calculate);
  };

  animationFrameId = requestAnimationFrame(calculate);

  return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="grid grid-cols-1 place-items-center min-h-screen bg-blue-950">
      <Card className="w-[440px] grid grid-cols-1 place-items-center h-[430px] bg-gradient-radial from-blue-700 to-blue-950 to-70%">
        <CardBody className="mr-[33px] w-[200px] md:w-[350px]">
            <p className="text-blue-300 font-black text-3xl md:text-5xl">
             {final.toFixed(10)}
            </p>
        </CardBody>
      </Card>
    </div>
  )
}
