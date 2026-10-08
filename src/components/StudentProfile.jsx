import { useEffect } from "react";

function StudentProfile({ name, department, year, count }) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${count}`;

    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
      <p>Practice Sessions: {count}</p>
    </div>
  );
}

export default StudentProfile;