import Headers from "@/componets/index/Headers";
import Footer from "@/componets/index/Footer";
import TodoList from "@/componets/index/TodoList";

const todoList = () => {
  return (
    <>
      <Headers />
      <TodoList pageName="Todo List" />
      <Footer />
    </>
  );
};

export default todoList;