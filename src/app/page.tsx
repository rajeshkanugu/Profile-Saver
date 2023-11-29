import { getServerSession } from "next-auth/next"
import { options } from "./api/auth/[...nextauth]/options";
import Image from "next/image";

const Home = async () => {
    const session = await getServerSession(options);    
    return (
        <main>
            <nav>
                <div className="flex justify-between items-center py-6 px-10">
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-4 items-center">
                            <a href="/">
                                <Image src="/profile.png" alt="logo" width={40} height={40} />
                            </a>
                            <a href="/" className="text-2xl font-bold">Profile Saver</a>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        {!session && <a href="/api/auth/signin" className="text-lg font-bold">Sign in</a>}
                        {session && <a href="/myprofile" className="text-lg font-bold">My Profile</a>}
                        {session && <a href="/api/auth/signout" className="text-lg font-bold">Sign out</a>}
                    </div>
                </div>
            </nav>
        </main>
    );
};

export default Home;