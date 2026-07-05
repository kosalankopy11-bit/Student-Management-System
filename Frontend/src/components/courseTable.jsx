//coursestable.jsx 
import React from "react";

function CourseTable({ courses, onEdit, onDelete }) {
  return (
    <table border="1" width="100%" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {courses.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              No Courses Found
            </td>
          </tr>
        ) : (
          courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.price}</td>
              <td>
                <button onClick={() => onEdit(course)}>
                  Edit
                </button>

                <button
                  onClick={() => onDelete(course.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default CourseTable;