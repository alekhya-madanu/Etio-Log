import { NextPage } from "next";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import InputWrapper from "../components/InputWrapper";
import { supabase } from "../lib/initSupabase";
import { Question } from "../lib/model/Question";

type QuestionForm = {
  question: Question;
  errors: { [field: string]: Error };
  submitted: boolean;
};

const AddQuestion: NextPage = () => {

  // const [questionForm, setFormState] = useState<QuestionForm>({
  //   question: {
  //     metric: "",
  //     options: [""],
  //     intensityRange: [1, 10],
  //     intensityLabels: [""],
  //   },
  //   errors: {},
  //   submitted: false,
  // });

  const { control, register, handleSubmit } = useForm<Question>({
    mode: "onChange",
    defaultValues: {
      metric: "",
      options: [{ label: "", id: "", index: 0 }],
    }
  });
  const { fields, append, remove, insert } = useFieldArray({ control, name: "options" });
  
  function clearForm() {}

  const onSubmit = async (question: Question) => {
    // const { data, error } = await supabase.from("Questions").insert([question]);
    console.log(question);
    // clearForm()
  };

  return (
    <div className="max-w-screen-md mx-auto mt-24">
      <div className="mb-12">
        <h1 className="page-headline">Add New Question</h1>
        <h2 className="page-subheadline">
          Each new question acts as a separate metric which you can track over
          time
        </h2>
      </div>
      <div className="gradient-section p-2 h-128">
        <form onSubmit={handleSubmit(onSubmit)} 
          className="flex flex-col m-2 h-full p-4 rounded-md bg-orange-300 bg-opacity-10">
          <InputWrapper
            name="metric"
            type="text"
            placeholder="Question"
            // error={questionForm.errors?.metric?.message}
            register={register}
            autoFocus
          />
          {fields.map((option, i) => (
            <InputWrapper
              name={option.id}
              key={option.id}
              placeholder="Enter option"
              // error={questionForm.errors?.options?.message}
              register={register}
              registerAs={`options.${i}.value`}
            />
          ))}
          <button
            className="inline"
            onClick={() => append({ label: "", id: "", index: 0 })}
          >
            Add Option
          </button>
          {/* <button onClick={() => setOptions([...options,""])} icon={<PlusOutlined />}></button> */}

          {/* <Form.Item label="Minimum" name="intensityLow">
                  <InputNumber size="small" defaultValue={1} onChange={(event) => setLow(event) } />
              </Form.Item>

              <Form.Item label="Maximum" name="intensityHigh">
              <InputNumber size="small" defaultValue={10} onChange={(event) => setHigh(event) } />
              </Form.Item> */}

          {/* <Form.Item label="IntensityLabels" name="intensityLabels">
              {labels.map((label,i) => 
                  <Input key={i} onChange={(event) => changeLabel(i,event.target.value)}/>)
                  }
                <Button onClick={() => setLabels([...labels,""])} icon={<PlusOutlined />}></Button>
              </Form.Item> */}
          <div className="w-full text-center my-5">
            <button type="submit" className="primary mx-auto w-48 h-12">
              Submit
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default AddQuestion;
