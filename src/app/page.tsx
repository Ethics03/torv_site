'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import clubposter from "../../public/final_intro_poster.jpg"

export default function Home() {
  const router = useRouter();
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
<div className='mt-10 mr-10 pr-170 flex justify-center gap-2 a'>
      
<Button>About Us</Button>
<Button onClick={() => router.push('/events')}>Events</Button>

</div>
      </div>
      <p className="font-bold ml-1">Torvalds Club</p>
      <div className="flex items-center justify-center min-h-screen">
  <Image
    src={clubposter}
    alt="clubposter"
    width={300}
    height={400}
    className="object-cover rounded"
  />
</div>
      </div>
  );
}
