import StudentForm from "../../components/students/StudentForm";

const AddStudent = () => {

  const handleSubmit = (data) => {
    console.log(data);

    // POST /students
  };

  return (

    <div className="max-w-4xl mx-auto py-10">

      <h1 className="text-4xl font-bold mb-2">
        Add Student
      </h1>

      <p className="text-gray-500 mb-8">
        Create a new student record.
      </p>

      <StudentForm
        onSubmit={handleSubmit}
      />

    </div>

  );

};

export default AddStudent;