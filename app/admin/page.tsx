import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return  (
    <div className="flex gap-2">
    <section className="w-[300px] rounded-2xl bg-white p-7  ">

      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold">DPRMD</p>
        
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <p>Actual</p>
        <h2 className="text-sm font-semibold">100/100</h2>

        <p>Actual present</p>
        <h2 className="text-sm font-semibold">100/100</h2>
        <p>Authorized Absent</p>
        <h2 className="text-sm font-semibold">100/100</h2>
      </div>

    </section>

    <section className="w-[300px] rounded-2xl bg-white p-7  ">

      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">DID</h2>
        
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <p>NO OF PERSONNEL 100/100</p>
      </div>

    </section>

     <section className="w-[300px] rounded-2xl bg-white p-7  ">

      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">DOD</h2>
        
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <p>NO OF PERSONNEL 100/100</p>
      </div>

    </section>

     <section className="w-[300px] rounded-2xl bg-white p-7  ">

      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">DLD</h2>
        
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <p>NO OF PERSONNEL 100/100</p>
      </div>

    </section>

     <section className="w-[300px] rounded-2xl bg-white p-7  ">

      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">DCAD</h2>
        
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <p>NO OF PERSONNEL 100/100</p>
      </div>

    </section>


     
    </div>
  );
};
export default Page;
