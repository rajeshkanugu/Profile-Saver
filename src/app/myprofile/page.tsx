import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options";
import Image from "next/image";

const imageStyle = {
    borderRadius: '50%',
}

const Home = async () => {
    const session = await getServerSession(options);    
    return (
        <main className="w-screen h-screen items-center justify-center flex text-lg">
            <div className="flex gap-4 flex-col justify-center items-center">
                {session?.user?.image && <Image src={session?.user?.image as string} alt="user image" width={180} height={180} style={imageStyle} />}
                {session?.user?.name && <span className="font-bold mt-3">{session?.user?.name}</span>}
                {session?.user?.email && <span className="font-bold">{session?.user?.email}</span>}
            </div>
        </main>
    );
};

export default Home;