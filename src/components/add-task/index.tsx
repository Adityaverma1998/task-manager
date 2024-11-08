"use client";

import { ITaskStatus } from "@/interfaces/task-status";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

const validate = Yup.object().shape({
  task: Yup.string()
    .min(3, "Task must be at least 3 characters")
    .required("Task is required"),
  status: Yup.string().oneOf(["todo", "inprogress", "complete"], "Invalid status"),
});

const taskStatus: (keyof ITaskStatus)[] = [
  'todo',
  'inprogress',
  'complete',
];

const AddTask = () => {
  const formik = useFormik({
    initialValues: {
      task: '',
      status: 'todo',
    },
    validationSchema: validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  useEffect(() => {
    console.log(formik);
  },[formik])

  return (
    <>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl text-black text-center font-bold">Add task</h2>
        <form className="max-w-sm mx-auto grid gap-2" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="task" className="block mb-2 text-sm font-medium text-black">
              Task Name
            </label>
            <input
              id="task"
              name="task"
              type="text"
              value={formik.values.task}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter task name"
            />
            {formik.touched.task && formik.errors.task ? (
              <div className="text-red-500 text-sm">{formik.errors.task}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="status" className="block mb-2 text-sm font-medium text-black">
              Select Status
            </label>
            <select
              id="status"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {taskStatus.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {formik.touched.status && formik.errors.status ? (
              <div className="text-red-500 text-sm">{formik.errors.status}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
