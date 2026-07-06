import StudentForm from "../../components/StudentForm";

const student = {
  fullName: "kosalan",
  email: "kosalan@gmail.com",
  phone: "+94 77 1234567",
  course: "Computer Science",
  status: "Active",
};

const EditStudent = () => {

  const handleSubmit = (data) => {
    console.log(data);

    // PUT /students/:id
  };

  return (

    <div className="max-w-4xl mx-auto py-10">

      <h1 className="text-4xl font-bold mb-2">
        Edit Student
      </h1>

      <p className="text-gray-500 mb-8">
        Update student information.
      </p>

      <StudentForm
        initialValues={student}
        onSubmit={handleSubmit}
      />

    </div>

  );

};

export default EditStudent;