import React, { Fragment } from "react";
import useTodos from "../hooks/useTodos";
import { MdDelete } from "react-icons/md";
import AddTodo from "./addTodo";

const TodoList = () => {
  const [
    { todoList, todoValue },
    { handleValueChange, handleAddTodo, handleCheckTodo, handleRemoveTodo },
  ] = useTodos();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
      <p className="text-center">Todo List 📝</p>
      <div className="relative z-0 w-full mb-5 group">
        <AddTodo
          todoValue={todoValue}
          handleAddTodo={handleAddTodo}
          handleValueChange={handleValueChange}
        />

        <ul className="mt-10 list-none list-inside">
          {todoList?.map((item) => {
            return (
              <Fragment key={Math.random()}>
                <ul className=" w-full flex flex-col">
                  <li className="shadow-sm hover:shadow-md inline-flex items-center gap-x-2 mb-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      checked={item.completed}
                      onChange={(e) => handleCheckTodo(e, item.value)}
                    ></input>
                    <div className="flex justify-between w-full">
                      {item.label}
                      <span
                        onClick={() => handleRemoveTodo(item.value)}
                        className="cursor-pointer inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white"
                      >
                        <MdDelete />
                      </span>
                    </div>
                  </li>
                </ul>
              </Fragment>
            );
          })}
        </ul>

        <button>Select All</button>
      </div>
    </form>
  );
};

export default TodoList;
