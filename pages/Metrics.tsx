import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Option, Question, getQuestions, deleteQuestion } from "../lib/model/Question";

type QuestionForm = {
  question: Question;
  errors: { [field: string]: Error };
  submitted: boolean;
};

const Metrics: NextPage = () => {
  const [questions, setQuestions] = useState <Question[] | null>(null)
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setQuestions(await getQuestions())
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuestions();
  }, [])

  return (
    <div className="w-full h-full md:mt-32 py-10 h-128 max-w-screen-md mx-auto">
      <h1 className="page-headline">All Metrics</h1>
      <h2 className="page-subheadline font-para font-light">
        Track each metric over time.
      </h2>
      {questions &&
        questions.length > 0 &&
        questions.map((question) => (
          <div
            key={question.id}
            className="p-4 my-2 bg-gray-50 border rounded-lg shadow-sm flex"
          >
            <div className="flex-grow">
              <h3 className="page-subheadline text-xl font-para font-light">
                {question.metric}
              </h3>
              <div className="flex flex-wrap">
                {question.options &&
                  question.options.map((option) => (
                    <div key={option.id} className="w-1/2 md:w-1/3">
                      {option.label}
                    </div>
                  ))}
              </div>
            </div>
            <button
              onClick={async () => {
                if (question.id) await deleteQuestion(question.id);
                setQuestions(questions.filter((q) => q.id !== question.id));
              }}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        ))}
        <Link href="/AddQuestion" passHref>
          <div className="p-4 my-2 bg-gray-50 border rounded-lg shadow-sm cursor-pointer">
            <div className="w-full mx-auto text-center page-subheadline text-xl font-para font-light">
                <a><FontAwesomeIcon icon={faPlus} /></a>
            </div>
          </div>
        </Link>
    </div>
  );
};


export default Metrics;
