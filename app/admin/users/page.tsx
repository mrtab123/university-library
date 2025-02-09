import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { auth } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { desc } from "drizzle-orm";



const Page = async () => {
  const session = await auth();
  
    const listUser = (await db.select().from(users).limit(10).orderBy(desc(users.createdAt))) as User[];

  const name = 'Israel Tabada';
  const email = 'tabs@gmail.com';
  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Users</h2>
        
      </div>

      <div className="mt-7 w-full overflow-hidden">

      <Table>
  <TableCaption>List of MPD Personnel.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[300px] ">
     
        Name</TableHead>
      <TableHead>email</TableHead>
      <TableHead>Role</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Last Activity</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
  {listUser.map((user) => (  
    <TableRow key={user.id}>

                 
      <>
      <TableCell className="font-medium user flex items-center gap-2">


        <Avatar>
          <AvatarFallback className="bg-amber-100">
            {getInitials(user.fullName || "IN")}

          </AvatarFallback>

        </Avatar>

        <div className="flex flex-col">
          <p className="font-semibold text-dark-200">{user.fullName}</p>
          <p className="text-xs text-light-500">{user.email}</p>
        </div>


      </TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>{user.status}</TableCell>
      <TableCell>{user.lastActivityDate}</TableCell>
      
      </>


 
    </TableRow>
  ))}
  </TableBody>
</Table>


      </div>
    </section>
  );
};

export default Page;
