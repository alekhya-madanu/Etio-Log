import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { FC, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import InputWrapper from "../components/Form/InputWrapper";
import PagedForm from "../components/Form/PagedForm";
import Slider from "../components/Form/Slider";
import { Option, Question, saveQuestion } from "../lib/model/Question";

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

  const { control, register, setFocus, setError, handleSubmit } = useForm<Question>({
    mode: "onChange",
    defaultValues: {
      metric: "",
      options: [{ label: "", id: "", index: 0, intensity: 0 }],
    }
  });

  const { fields, append, remove } = useFieldArray({ control, name: "options" });
  const [activeOption, setActiveOption] = useState(0);

  const metric = useWatch({name: "metric", control})

  const addBlankOption = () => { 
    // if (options[options.length - 1].label !== "") {
      append({ label: "", id: "", index: fields.length, intensity: 0 });
      setActiveOption(fields.length);
      setFocus(`options.${fields.length - 1}.label`);
    // }
  }
  
  function clearForm() {}

  const onSubmit = async (question: Question) => {
    const { data, error } = await saveQuestion(question);
    if (data) {
      console.log(data);
    } 
    if (error) {
      console.error(error);
    }
  };

  const EditOption: FC<{ option: Option, index: number, isActive: boolean }> = ({ 
    option,
    index,
    isActive
  }) => {

    const watchOption = useWatch({name: "options", control})[index]
    const activate = () => {
      console.log(index);
      if (!isActive) setActiveOption(index);
      setFocus(`options.${index}.label`);
    }

    return (
      <div className="flex bg-gray-400 my-2 p-2 bg-opacity-10 border-2 border-gray-500 rounded-lg">
        {isActive ? (
          <div className="flex-grow">
            <InputWrapper
              className="w-full text-2xl pageform"
              name={option.id}
              placeholder="Enter option"
              // error={questionForm.errors?.options?.message}
              register={register}
              registerAs={`options.${index}.label`}
            />
            <div className="py-4">
              <Slider
                name={option.id + "_range"}
                register={register}
                registerAs={`options.${index}.intensity`}
                min={-10}
                max={10}
                step={1}
              />
            </div>
          </div>
        ) : (
          <div
            className="flex-grow text-2xl my-auto border-gray-500 rounded-lg px-2 flex"
            onFocus={activate}
            onClick={activate}
          >
            {watchOption.label}
          </div>
        )}
        <div
          className={
            "m-2 p-1 rounded-lg mx-2 w-14 border-2 text-center my-auto " +
            (watchOption.intensity >= 0
              ? "text-green-600 border-green-700"
              : "text-red-400 border-red-400")
          }
        >
          <span className="text-base font-semibold">
            {watchOption.intensity}
          </span>
        </div>
        <button
          className="text-xl px-2 rounded-lg h-full my-auto"
          type="button"
          onClick={() => remove(index)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full md:mt-32 py-10 h-128 max-w-screen-md mx-auto">
      <h1 className="page-headline">Add New Question</h1>
      <h2 className="page-subheadline font-para font-light">
        Each new question acts as a separate metric which you can track over
        time
      </h2>
      <PagedForm
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 h-[65vh] md:h-[40em] rounded-md bg-slate-900 bg-opacity-10 shadow-md dark:bg-opacity-30"
        pages={[
          <div className="" key={1}>
            <InputWrapper
              className="w-full text-2xl pageform"
              name="metric"
              label="Question Title"
              type="text"
              placeholder="Question"
              // error={questionForm.errors?.metric?.message}
              register={register}
              autoFocus
            />
          </div>,
          <div key={2}>
            <h2 className="text-center text-3xl mb-4 font-semibold text-gray-800">{metric}</h2>
            {fields.map((option, i) => (
                <EditOption
                  key={i}
                  index={i}
                  option={option}
                  isActive={i === activeOption}
                />
            ))}
            <button
              className="mt-4 w-full border border-gray-500 my-2 py-4"
              type="button"
              onClick={addBlankOption}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>,
        ]}
      />
    </div>
  );
};


export default AddQuestion;
