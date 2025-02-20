import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export default function StudentProvider({ children }) {
  const [studentViewCouresesList, setStudentViewCouresesList] = useState([]);

  return (
    <StudentContext.Provider
      value={{ studentViewCouresesList, setStudentViewCouresesList }}
    >
      {children}
    </StudentContext.Provider>
  );
}
