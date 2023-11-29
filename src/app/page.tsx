import { getServerSession } from "next-auth/next"
import { options } from "./api/auth/[...nextauth]/options";
import Image from "next/image";

const Home = async () => {
    const session = await getServerSession(options);    
    return (
        <main>
            <h1>Home</h1>
            <p>
                {session?.user?.image && <Image src={session?.user?.image as string} alt="user image" width="100" height="100" />}
            </p>
        </main>
    );
};

export default Home;