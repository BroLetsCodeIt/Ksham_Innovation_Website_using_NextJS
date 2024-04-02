import Header from "@/components/header";
import Innovation from "@/components/Innovation";
import InnovationExist from "@/components/InnovationExist";
import MainSection from "@/components/MainSection";
import Supports from "@/components/Supports";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <MainSection/>
      <InnovationExist/>
      <Innovation/>
      <Supports/>
    </>
  );
}
