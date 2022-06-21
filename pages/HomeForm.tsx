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
};

export default HomeForm;
