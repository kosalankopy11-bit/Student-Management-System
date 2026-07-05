//EditCourse.jsx
import React, { useEffect, useState } from "react";
import api from "../api";
import { useNavigate, useParams } from "react-router-dom";

function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const getCourse = async () => {
    try {
      const res = await api.get(`/courses/${id}`);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setPrice(res.data.price);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/courses/${id}`, {
        title,
        description,
        price: Number(price),
      });

      alert("Course Updated Successfully ✅");
      navigate("/courses");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Course ✏️</h2>

      <form onSubmit={handleUpdate}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br /><br />

        <button type="submit">Update Course</button>
      </form>
    </div>
  );
}

export default EditCourse;