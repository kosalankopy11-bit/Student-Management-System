import StudentCard from "./StudentCard";

import {
    FiUsers,
    FiBookOpen,
    FiUserCheck
} from "react-icons/fi";

const StudentStats = () => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            <StudentCard
                title="Total Students"
                value="245"
                icon={<FiUsers />}
                color="bg-blue-600"
            />

            <StudentCard
                title="Courses"
                value="12"
                icon={<FiBookOpen />}
                color="bg-green-600"
            />

            <StudentCard
                title="Active Students"
                value="230"
                icon={<FiUserCheck />}
                color="bg-purple-600"
            />

        </div>

    );

};

export default StudentStats;