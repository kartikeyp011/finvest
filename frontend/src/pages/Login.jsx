import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FadeIn from "@/components/FadeIn";

export function Login() {
    return (
        <div className="relative w-full lg:grid min-h-screen lg:grid-cols-2   overflow-hidden">

            <img className="absolute left-0 z-[1] h-full w-auto" src="https://res.cloudinary.com/djoebsejh/image/upload/v1721133537/lye4qxmyubg7wuj8exvt.svg" alt="" />

            <Link to="/" className=" absolute top-0 left-0 flex flex-row items-center justify-center cursor-pointer p-5 z-[999]">
                <FadeIn direction="right" delay={0.3} >
                    <img className="md:h-[50px] h-[30px] md:pr-2" src="https://res.cloudinary.com/djoebsejh/image/upload/v1721187808/srktgdcijec0zqmlgvbh.png" alt="Logo" />
                    <h1 className="md:text-4xl text-3xl font-semibold text-white cursor-pointer">Finvest</h1>
                </FadeIn>
            </Link>


            <div className="flex flex-col items-center justify-center bg-[#05140D] p-4 pt-[10vh] lg:p-0 lg:hidden">
                <FadeIn direction="down" delay={0.3} fullWidth>
                    <h1 className="text-4xl sm:text-5xl py-4 font-bold text-[#1B7A57] text-center">Welcome Back!</h1>
                </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.3} fullWidth className="flex  items-center justify-center bg-[#05140D] p-2 md:p-4 py-8 lg:p-0">
                <div className="relative mx-auto grid w-[320px] sm:w-[500px] gap-6 z-10 bg-[#2FB574] bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-lg md:p-10 p-6 py-14 mb-10 shadow-lg">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-4xl font-bold py-2 text-white">Login</h1>
                        <p className="text-lg text-[#E8F6F3]">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                className="border border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-white">Password</Label>
                                <Link
                                    to="/forgot-password"
                                    className="text-sm text-[#E8F6F3] underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                className="border border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full bg-[#1B7A57] hover:bg-[#0e3a26] text-white py-2 rounded-md">
                            Login
                        </Button>
                        <Button variant="outline" className="w-full border-[#1B7A57] text-[#1B7A57] py-2 rounded-md">
                            Login with Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-md text-[#E8F6F3]">
                        Don&apos;t have an account?{" "}
                        <Link to="/signup" className="underline text-[#1B7A57]">
                            Sign up
                        </Link>
                    </div>
                </div>
            </FadeIn>

            <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center bg-white relative">
                <img className="absolute right-0 z-0" src="https://res.cloudinary.com/djoebsejh/image/upload/v1721133535/duitolguodf7th7fzzek.svg" alt="" />
                <div className="relative text-center z-[5]">
                    <FadeIn direction="down" delay={0.3} fullWidth>
                        <h1 className="md:text-6xl text-4xl font-bold text-[#1B7A57]">Welcome Back!</h1>
                    </FadeIn>
                    <FadeIn direction="down" delay={0.4} fullWidth>
                        <p className=" mt-4 text-xl text-[#05140D]">We are happy to see you again. Please login to continue.</p>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}