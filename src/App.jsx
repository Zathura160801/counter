import { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import Empty from "./components/Empty";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Susu Ultra", count: 1 },
    { title: "Tahu sumedang", count: 1 },
    { title: "Semangka", count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank list!");
      return;
    }

    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];

    setTodos(addedTodos);
    setValue("");
  };

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].count > 1) {
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);

    return totalCounts;
  };

  return (
    <>
      <Navbar />
      <Container>
        <SearchInput
          value={value}
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
        />

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => {
            setTodos([]);
          }}
        />

        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => handleSubstractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}
