import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Delete, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

function InstructorCourse({ listOfCourses }) {
  const navigate = useNavigate();



  return (
    <Card>
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className="text-3xl font-bold">All Courses</CardTitle>
        <Button
          className="p-6"
          onClick={() => navigate("/instructor/create-new-course")}
        >
          Create New Coures
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Course</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                listOfCourses && listOfCourses.length > 0 ?
                listOfCourses.map(course=> 
                  <TableRow>
                <TableCell className="font-medium">
                  {course?.title}
                </TableCell>
                <TableCell>{course?.students?.length}</TableCell>
                <TableCell>{course?.pricing}</TableCell>
                <TableCell className="text-right">
                  <Button 
                  onClick={() => {
                    navigate(`/instructor/edit-course/${course?._id}`)
                  }}
                  variant="ghost" size="sm">
                    <Edit className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Delete className="h-6 w-6" />
                  </Button>
                </TableCell>
              </TableRow>
                ) : null
              }
              
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default InstructorCourse;
