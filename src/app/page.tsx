import AddTask from "@/components/add-task";
import Header from "@/components/common/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Header/>
        <h1>Hello</h1>
        <AddTask/>

      </main>
    </>
  );
}
