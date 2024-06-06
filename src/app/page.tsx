"use client"
import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-[220px]">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <DropdownMenu isOpen={isOpen}/>
    </main>
  );
}
