import Image from "next/image";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Home() {
  return (
    <div>
      <div className='flex justify-between'>
        <Image
            className="m-3 relative"
            src="/club_logo.png"
            width={65}
            height={65}
            alt="Picture of the author"
        />
<div className='mt-10 mr-10 flex justify-center gap-2'>
      
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Home</MenubarTrigger>
    <MenubarTrigger>Events</MenubarTrigger>
    <MenubarTrigger>Gallery</MenubarTrigger>
    <MenubarTrigger>Other Clubs</MenubarTrigger>
    <MenubarTrigger>Contact Us</MenubarTrigger>
  </MenubarMenu>
</Menubar>

</div>
      </div>
      <p className="font-bold ml-1">Torvalds Club</p>
      </div>
  );
}
