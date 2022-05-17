import { NextPage } from "next";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import InputWrapper from "../components/Form/InputWrapper";
import PagedForm from "../components/Form/PagedForm";
import { Question, saveQuestion } from "../lib/model/Question";

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
    // const { data, error } = await saveQuestion(question);
    console.log(question);
    // clearForm()
  };

  return (
    <div className="w-full h-full md:mt-32 py-10 h-128 max-w-screen-md mx-auto">
        <h1 className="page-headline">Add New Question</h1>
        <h2 className="page-subheadline">
          Each new question acts as a separate metric which you can track over
          time
        </h2>
        <PagedForm onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col justify-between p-8 rounded-md bg-slate-900 bg-opacity-10 shadow-md dark:bg-opacity-30" >
          <InputWrapper
            name="metric"
            type="text"
            placeholder="Question"
            // error={questionForm.errors?.metric?.message}
            register={register}
            autoFocus
          />
          <div className="pl-12">
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
              className="inline my-1"
              onClick={() =>
                append({ label: "", id: "", index: fields.length })
              }
            >
              Add Option
            </button>
          </div>
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
          <div className="w-full text-center justify-end">
            <button type="submit" className="primary mx-auto w-48 h-12">
              Submit
            </button>
          </div>
        </PagedForm>
    </div>
  );
};

export default AddQuestion;
