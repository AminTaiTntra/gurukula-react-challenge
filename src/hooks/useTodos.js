import { useState } from "react";

const useTodos = () => {
  const [{ todoList, todoValue }, setState] = useState({
    todoList: [],
    todoValue: "",
  });

  const handleValueChange = (e) => {
    setState((state) => ({
      ...state,
      todoValue: e.target.value,
    }));
  };

  const handleAddTodo = (e) => {
    if ((e.key === "Enter" || e.key === "Tab") && e.target.value) {
      setState((state) => ({
        ...state,
        todoValue: "",
        todoList: [
          ...todoList,
          {
            value: Math.random().toString(16).slice(2),
            label: todoValue,
            completed: false,
          },
        ],
      }));
    }
  };

  const handleCheckTodo = (e, value) => {
    setState((state) => ({
      ...state,
      todoList: todoList.map((item) => {
        if (item.value === value) {
          return {
            ...item,
            completed: e.target.checked,
          };
        }
        return {
          ...item,
        };
      }),
    }));
  };

  const handleRemoveTodo = (value) => {
    setState((state) => ({
      ...state,
      todoList: todoList.filter((item) => item.value !== value),
    }));
  };

  return [
    { todoList, todoValue },
    { handleValueChange, handleAddTodo, handleCheckTodo, handleRemoveTodo },
  ];
};

export default useTodos;
