import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function dashboard() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-full h-full my-10 flex sm:flex-row justify-center items-center gap-4 mt-4 max-sm:flex-col">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
              <CardDescription>
                this is the total number of users{" "}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">4552</p>
            </CardContent>
            <CardFooter>
              <p>Today&apos;s new users -&gt; +25</p>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Total Categories</CardTitle>
              <CardDescription>
                this is the total number of users{" "}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">4552</p>
            </CardContent>
            <CardFooter>
              <p>Today&apos;s new users -&gt; +25</p>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Total recipies</CardTitle>
              <CardDescription>
                this is the total number of users{" "}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">4552</p>
            </CardContent>
            <CardFooter>
              <p>Today&apos;s new users -&gt; +25</p>
            </CardFooter>
          </Card>
        </div>
        <div className="">
          <Card>
            <CardHeader>
              <CardTitle>Total visitors</CardTitle>
              <CardDescription>
                this is the total number of users{" "}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">4552</p>
            </CardContent>
            <CardFooter>
              <p>Today&apos;s new users -&gt; +25</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="flex flex-row flex-nowrap justify-evenly items-center mx-10">
        <div className="m-10 w-1/2">
        <Card>
  <CardHeader>
    <CardTitle>TOP USERS of the week</CardTitle>
  </CardHeader>
  <CardContent>
  <div className="mx-10">

<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead className="text-right">NB posts</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">1</TableCell>
      <TableCell>Ali</TableCell>
      <TableCell className="text-right">15</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">1</TableCell>
      <TableCell>Ali</TableCell>
      <TableCell className="text-right">11</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">1</TableCell>
      <TableCell>Ali</TableCell>
      <TableCell className="text-right">8</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">7</TableCell>
      <TableCell>sarra</TableCell>
      <TableCell className="text-right">6</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">1</TableCell>
      <TableCell>samia</TableCell>
      <TableCell className="text-right">1</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
  </CardContent>
</Card>

        </div>
        <div className="mx-10 w-1/2">
        <Card className="">
  <CardHeader>
    <CardTitle>TOP Recipies of the week</CardTitle>
  </CardHeader>
  <CardContent>
  <div className="mx-10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">user ID</TableHead>
                  <TableHead className="text-right">NB posts</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Ali</TableCell>
                  <TableCell className="text-right">15</TableCell>
                  <TableCell className="text-right">15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Ali</TableCell>
                  <TableCell className="text-right">11</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Ali</TableCell>
                  <TableCell className="text-right">8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">7</TableCell>
                  <TableCell>sarra</TableCell>
                  <TableCell className="text-right">6</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>samia</TableCell>
                  <TableCell className="text-right">1</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>  </CardContent>
</Card>
          
        </div>
      </div>
    </div>
  );
}
