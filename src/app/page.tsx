import Image from "next/image";
import ToDo from "./toDo"
import GetData from "./getData";
import { compiledData, ICompiledData, dummyData, receivedData } from "./model";
export default async function Home() {
  return (
    <>
    <ToDo/>
    <GetData/>
    </>
    )  
  }
  
