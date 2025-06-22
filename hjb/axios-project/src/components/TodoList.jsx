import { useFetch } from "../hooks/useFetch";

export default function TodoList() {
  const { data: todos } = useFetch("/dc48-4215-4652-b1ba");

  return (
    <div>
      <h2>투두 리스트 </h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>
            <strong>제목: </strong>
            {todo.fields.name ? todo.fields.name : "-"}
          </p>
          <p>
            <strong>작성자: </strong>
            {todo.fields.writer ? todo.fields.writer : "-"}
          </p>
          <p>
            <strong>내용: </strong>
            {todo.fields.content ? todo.fields.content : "-"}
          </p>
          <p>
            <strong>작성일: </strong>
            {todo.createdTime
              ? new Date(todo.createdTime).toLocaleString("ko-KR")
              : "-"}
          </p>
        </div>
      ))}
    </div>
  );
}
