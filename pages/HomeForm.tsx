import type { NextPage } from 'next'
import { supabase } from '../lib/initSupabase'
import { Menu, Slider } from 'antd';
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Radio,
  Select, Cascader, DatePicker, TimePicker,
  InputNumber, TreeSelect, Switch,Dropdown } from 'antd';
  import { DownOutlined, UserOutlined } from '@ant-design/icons';

function formatter(value: any) {
  return `${value}%`;
}

type SizeType = Parameters < typeof Form > [0]['size'];

const getMenu = (options: Array<string>) => {
  return(
    <div>
    <Menu>
    {options.map((option,i) =>
    <Menu.Item key = {i}>
      <a target="_blank">
        {option}
      </a>
    </Menu.Item>)
    }
    </Menu>
    </div>
  
  )
};

const HomeForm: NextPage = () => {
    const [componentSize, setComponentSize] = useState < SizeType | 'default' > ('default');
    
    const [questions, setQuestions] = useState < any[] | null > ([])
    useEffect(() => {
       const fetchData = async () => {
        let { data: QuestionData, error } = await supabase
          .from('Questions')
          .select('*')

        if (error) {
          console.error(error);
        } else {
          setQuestions(QuestionData)
        }
      };
      fetchData();
      console.log(questions)
    }, []); 
    
    const onFinish = async (values: any) => {

      // var date: string = values['date'].format('MM/DD/YYYY');

      // var time: string = values['time'].format('hh:mm:ss A ZZ');
      // delete values['time'];

      // values['date'] = date + " " + time;
      // console.log(values);
      // const { data, error } = await supabase
      //   .from('MoodData')
      //   .insert([
      //     values,
      //   ])
      console.log(values);
      // if (error) {
      //   console.error(error);
      // }
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

      return (
        <>
        {questions!=null && questions.map((question,i) =>
        <Form key = {i} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal"
          initialValues={{ size: componentSize }} onFinish={onFinish} onFinishFailed={onFinishFailed}
          size={componentSize as SizeType}>
          <Form.Item label={question.metric} name="mood">
          <Dropdown overlay={getMenu(question.options)}>
      <Button>
        Select <DownOutlined />
      </Button>
    </Dropdown>
          </Form.Item>
          <Form.Item label="Intensity" name="intensity">
            <Slider min={question.intensityRange[0]} max={question.intensityRange[1]} />
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

        </Form>)
        }
        </>
      )
      };

      export default HomeForm