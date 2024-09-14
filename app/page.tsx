import Image from "next/image";
import Header from "./components/Header";
import PlayerInfo from "./components/PlayerInfo";
import Button from "./components/Button";

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111722] dark justify-between items-center group/design-root overflow-x-hidden"
    >
      <Header />
      <div className="flex flex-col items-center gap-4 bg-[#111722] px-4 min-h-[72px] py-8">
        <PlayerInfo name="Eli Loveman" wins={6} losses={2} points={12} />
        <PlayerInfo name="Eli Loveman" wins={6} losses={2} points={12} />
        <PlayerInfo name="Eli Loveman" wins={6} losses={2} points={12} />
      </div>
      <div>
        <div className="flex px-4 py-3">
          <Button>See detailed results</Button>
        </div>
        <div className="h-5 bg-[#111722]"></div>
      </div>
    </div>
  );
}
