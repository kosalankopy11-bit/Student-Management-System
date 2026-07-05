import React, { useEffect, useState } from "react";

function CourseForm({ onSubmit, selectedCourse, clearSelection }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // When edit click pannumbodhu values fill aagum
  useEffect(() => {
    if (selectedCourse) {
      setTitle(selectedCourse.title);
      setDescription(selectedCourse.description);
      setPrice(selectedCourse.price);
    } else {
      setTitle("");
      setDescription("");
      setPrice("");
    }
  }, [selectedCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      description,
      price: Number(price),
    });

    // clear form after submit
    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{selectedCourse ? "Edit Course ✏️" : "Add Course ➕"}</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br /><br />

        <button type="submit">
          {selectedCourse ? "Update" : "Create"}
        </button>

        {selectedCourse && (
          <button
            type="button"
            onClick={clearSelection}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default CourseForm;