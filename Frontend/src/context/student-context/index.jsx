import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export default function StudentProvider({ children }) {
  const [studentViewCouresesList, setStudentViewCouresesList] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  return (
    <StudentContext.Provider
      value={{
        studentViewCouresesList,
        setStudentViewCouresesList,
        loadingState,
        setLoadingState,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
