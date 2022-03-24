import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../node_modules/antd/dist/antd.css';
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
   InputNumber,
   TreeSelect,
   Switch,
 } from 'antd';

 type SizeType = Parameters<typeof Form>[0]['size'];

 const Home: NextPage = () => {
   const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
   const onFormLayoutChange = ({ size }: { size: SizeType }) => {
     setComponentSize(size);
   };
   return (
     <Form
       labelCol={{ span: 4 }}
       wrapperCol={{ span: 14 }}
       layout="horizontal"
       initialValues={{ size: componentSize }}
       onValuesChange={onFormLayoutChange}
       size={componentSize as SizeType}
     >
       <Form.Item label="Form Size" name="size">
         <Radio.Group>
           <Radio.Button value="small">Small</Radio.Button>
           <Radio.Button value="default">Default</Radio.Button>
           <Radio.Button value="large">Large</Radio.Button>
         </Radio.Group>
       </Form.Item>
       <Form.Item label="Input">
         <Input />
       </Form.Item>
       <Form.Item label="Select">
         <Select>
           <Select.Option value="demo">Demo</Select.Option>
         </Select>
       </Form.Item>
       <Form.Item label="TreeSelect">
         <TreeSelect
           treeData={[
             { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
           ]}
         />
       </Form.Item>
       <Form.Item label="Cascader">
         <Cascader
           options={[
             {
               value: 'zhejiang',
               label: 'Zhejiang',
               children: [
                 {
                   value: 'hangzhou',
                   label: 'Hangzhou',
                 },
               ],
             },
           ]}
         />
       </Form.Item>
       <Form.Item label="DatePicker">
         <DatePicker />
       </Form.Item>
       <Form.Item label="InputNumber">
         <InputNumber />
       </Form.Item>
       <Form.Item label="Switch" valuePropName="checked">
         <Switch />
       </Form.Item>
       <Form.Item label="Button">
         <Button>Button</Button>
       </Form.Item>
     </Form>
   );
 };


export default Home
