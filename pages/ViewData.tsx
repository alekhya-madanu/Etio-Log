import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/initSupabase'
import MoodCard from '../components/MoodCard';
import Draw from '../components/Draw';

const MainForm = () => {
    const [data, setData] = useState < any[] | null > ([])
    useEffect(() => {
       const fetchData = async () => {
        let { data: MoodData, error } = await supabase
          .from('MoodData')
          .select('*')
          .order('date')
        if (error) {
          console.error(error);
        } else {
          setData(MoodData)
        }
      };
      fetchData();
    }, []); 

    return ( renderData(data));
};

function renderData(data: any[] | null) {
  if (data) {
    if (data instanceof Array && data.length > 0) {
        return(
        // data.map(d => 
        //     <div key = { d.id }>
              // <MoodCard mood = {d}/>
              <Draw width={500} height={500}/>
            // </div>
        )
        
    }
    if (data instanceof Array && data.length === 0) {
        return <div>No data</div>
    }
    else {
        return <div>Error fetching data</div>
    }
  }
}

export default MainForm