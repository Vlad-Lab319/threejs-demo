import { CardsContainer } from "@/components/CardsContainer";
import Link from "next/link";

const CardsPage = () => {

  return <div className="h-screen w-screen">
    {/* <h1>Cards</h1> */}
    <div className="h-full">

    <CardsContainer />
    </div>
    <Link href={"/"}>
    {/* <h2>Home Page</h2> */}
    </Link>
  </div>
}

export default CardsPage;