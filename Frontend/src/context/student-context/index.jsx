import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export default function StudentProvider({ children }) {
  const [studentViewCouresesList, setStudentViewCouresesList] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [studentViewCourseDetails, setStudentViewCourseDetails] =
    useState(null);
  const [currentCourseDetailedId, setCurrentCourseDetailedId] = useState(null);
  return (
    <StudentContext.Provider
      value={{
        studentViewCouresesList,
        setStudentViewCouresesList,
        loadingState,
        setLoadingState,
        studentViewCourseDetails,
        setStudentViewCourseDetails,
        currentCourseDetailedId,
        setCurrentCourseDetailedId,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
