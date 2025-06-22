import axiosClient from "../utils/axiosClient";
import { useEffect, useState } from "react";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.post("/e7ad-247e-46cf-b3d5", {
        fields: {
          title,
          writer,
          content,
        },
      });
      alert("과제 등록 성공!");
    } catch (error) {
      console.error("과제 등록 실패", error);
    }
  };

  return (
    <div>
      <h2>과제 등록</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목: </label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>작성자: </label>
          <input value={writer} onChange={(e) => setWriter(e.target.value)} />
        </div>
        <div>
          <label>내용: </label>
          <input value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
