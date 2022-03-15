import TodoListApp from "./pages/TodoList/TodoListPage";
import {mockTodoList} from './mockTodoList'

function App() {
    return (
      <TodoListApp lists={mockTodoList}/>
    );
}

export default App;
