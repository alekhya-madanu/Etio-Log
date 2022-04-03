import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import '../node_modules/antd/dist/antd.css';
import { supabase } from '../lib/initSupabase'
import { Slider } from 'antd';
import moment from 'moment'

function formatter(value:number) {
  return `${value}%`;
}


import Login from "../components/Login";

// const Home: NextPage = () => {
//   return (
 import React from 'react';
 import {
   Form,
   Input,
   Button,
   Radio,
   Select,
   Cascader,
   DatePicker,
   TimePicker,
   InputNumber,
   TreeSelect,
   Switch,
 } from 'antd';

 type SizeType = Parameters<typeof Form>[0]['size'];

 const MainForm: NextPage =  () => {
    const [data, setData] = useState<any[] | null>([])
    useEffect(() => {
      // Some synchronous code.
  
      (async () => {
          await fetchData();
      })();

  }, []);
  const fetchData = async () => {


let { data: MoodData, error } = await supabase
  .from('MoodData')
  .select('*')
  .order('date')

  console.table(MoodData)

    if(error){
        console.error(error);
    }else{
        setData(MoodData)
    }
    };

   return (
    <div>
    {data?data.map(d => <div key={d.id}>{`mood is ${d.mood}, intensity is ${d.intensity}`}</div>):<div></div>}
    </div>
   );
 };

export default MainForm
