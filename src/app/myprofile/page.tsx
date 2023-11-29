import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options";
import Image from "next/image";

const imageStyle = {
    borderRadius: '50%',
}

const Home = async () => {
    const session = await getServerSession(options);    
    return (
        <main className="w-screen h-screen text-lg items-center justify-center flex">
            <div className="items-center justify-center flex gap-10 font-bold flex-col border-2 rounded-xl shadow-lg p-10">
                <h1 className="text-2xl">My Profile</h1>
                <div className="flex gap-4 flex-col justify-center items-center">
                    {session?.user?.image && <Image src={session?.user?.image as string} alt="user image" width={180} height={180} style={imageStyle} />}
                    {session?.user?.name && <span className="font-bold mt-5">{session?.user?.name}</span>}
                    {session?.user?.email && <span className="font-bold">{session?.user?.email}</span>}
                </div>
            </div>
        </main>
    );
};

export default Home;