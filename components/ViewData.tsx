import type { NextPage } from 'next'
import { useEffect } from 'react'
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
 import React, { useState } from 'react';
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

 const MainForm: NextPage = () => {
   const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFinish = async (values: any) => {

    var date:string = values['date'].format('MM/DD/YYYY');

    var time:string = values['time'].format('hh:mm:ss A ZZ');
    delete values['time'];

    values['date']= date+" "+time;
    console.log(values);
    const { data, error } = await supabase
      .from('MoodData')
      .insert([
        values,
      ])
    console.log(data);
    if(error){
        console.error(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
     const [session, setSession] = useState(null)

     useEffect(() => {
       setSession(supabase.auth.session())

       supabase.auth.onAuthStateChange((_event, session) => {
         setSession(session)
       })
     }, [])
    const onLogout = () => setSession(null)
   return (
     <div>
      <Login login={session!=null} onLogout={onLogout}/>
     <Form
       labelCol={{ span: 4 }}
       wrapperCol={{ span: 14 }}
       layout="horizontal"
       initialValues={{ size: componentSize }}
       onFinish={onFinish}
       onFinishFailed={onFinishFailed}
       size={componentSize as SizeType}
     >
       <Form.Item label="Mood" name="mood">
         <Input />
       </Form.Item>
       <Form.Item label="Intensity" name="intensity">
            <Slider tipFormatter={formatter} />

       </Form.Item>

       <Form.Item label="DatePicker" name="date">
         <DatePicker />
       </Form.Item>
       <Form.Item label="Time" name="time">
         <TimePicker />
       </Form.Item>

       <Form.Item>
         <Button type="primary" htmlType="submit">Submit</Button>
       </Form.Item>
     </Form>
     </div>
   );
 };

export default MainForm
