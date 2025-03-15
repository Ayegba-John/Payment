import Image from "next/image";
import styles from "./page.module.css";
import Payment from "./components/Payment/Payment";
import Hero from "./Hero";

const page = () => {
  return (
    <div>
      <Payment />
      <Hero />
    </div>
  );
};
export default page;
