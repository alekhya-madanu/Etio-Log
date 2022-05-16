import type { NextPage } from "next";
import { supabase } from "../lib/initSupabase";
import React, { useEffect, useState } from "react";

function formatter(value: any) {
  return `${value}%`;
}

const getMenu = (options: Array<string>) => {
  return (
    <div>
        {options.map((option, i) => (
            <a target="_blank" key={i}>{option}</a>
        ))}
    </div>
  );
};

const HomeForm: NextPage = () => {
  const [questions, setQuestions] = useState<any[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data: QuestionData, error } = await supabase
        .from("Questions")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        console.log(QuestionData);
        setQuestions(QuestionData);
      }
    };

    fetchData();
  }, []);

  const onFinish = async (values: any) => {
    var date: string = values["date"].format("MM/DD/YYYY");
    var time: string = values["time"].format("hh:mm:ss A ZZ");
    delete values["time"];

    values["date"] = date + " " + time;
    console.log(values);
    const { data, error } = await supabase.from("MoodData").insert([values]);
    if (error) {
      console.error(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (<div>Hello</div>);
  //   <div>
  //     {questions != null &&
  //       questions.map((question, i) => (
  //         <Form
  //           key={i}
  //           labelCol={{ span: 4 }}
  //           wrapperCol={{ span: 14 }}
  //           layout="horizontal"
  //           initialValues={{ size: componentSize }}
  //           onFinish={onFinish}
  //           onFinishFailed={onFinishFailed}
  //           size={componentSize as SizeType}
  //         >
  //           <Form.Item label={question.metric} name="metric">
  //             <Dropdown overlay={getMenu(question.options)}>
  //               <Button>
  //                 {" "}
  //                 Select
  //                 <DownOutlined />
  //               </Button>
  //             </Dropdown>
  //           </Form.Item>
  //           <Form.Item label="Intensity" name="intensity">
  //             <Slider
  //               min={question.intensityRange[0]}
  //               max={question.intensityRange[1]}
  //             />
  //           </Form.Item>
  //           <Form.Item label="DatePicker" name="date">
  //             <DatePicker />
  //           </Form.Item>
  //           <Form.Item label="Time" name="time">
  //             <TimePicker />
  //           </Form.Item>
  //           <Form.Item>
  //             <Button type="primary" htmlType="submit">
  //               Submit
  //             </Button>
  //           </Form.Item>
  //         </Form>
  //       ))}
  //   </div>
  // );
};

export default HomeForm;
