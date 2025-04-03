import Image from "next/image";

export default function Home() {
  return (
      <div>
        <Image
            className="m-2"
            src="/club_logo.png"
            width={80}
            height={80}
            alt="Picture of the author"
        />
        <p className="font-bold m-1">Torvalds Club</p>
      </div>
  );
}
