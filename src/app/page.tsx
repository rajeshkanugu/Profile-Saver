import { getServerSession } from "next-auth/next"
import { options } from "./api/auth/[...nextauth]/options";
import Image from "next/image";

const Home = async () => {
    const session = await getServerSession(options);    
    return (
        <main className="w-screen px-40 py-10">
            <nav>
                <div className="flex justify-between items-center py-6">
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
            <section className="flex mt-20 gap-20 justify-between">
                <div className="flex flex-col gap-10">
                    <span className="text-6xl leading-snug font-bold">
                        A platform to store your loved ones details
                    </span>
                    <span className="italic text-xl">
                        A platform to store your loved ones details in a user friendly way.
                    </span>
                    <div className="w-50 font-bold text-xl">
                        <a href="/profile"><button className="w-50 p-10 bg-black text-white py-5 rounded-xl">Get Started</button></a>
                    </div>
                </div>
                <div className="">
                    <Image src="/portfolio.png" alt="hero" width={500} height={500} />
                </div>
            </section>
        </main>
    );
};

export default Home;