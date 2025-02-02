import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Delete, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";


function InstructorCourse() {


    const navigate = useNavigate()

    return ( 
        <Card>
            <CardHeader className="flex justify-between flex-row items-center">
                <CardTitle className="text-3xl font-bold">
                    All Courses
                </CardTitle>
                <Button className="p-6"
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
    <TableRow>
      <TableCell className="font-medium">React JS Full Course 2025</TableCell>
      <TableCell>100</TableCell>
      <TableCell>$5000</TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" size="sm" >
            <Edit className="h-6 w-6"/>
        </Button>
        <Button variant="ghost" size="sm" >
            <Delete className="h-6 w-6"/>
        </Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>

                </div>
            </CardContent>
        </Card>
     );
}

export default InstructorCourse;