"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    TextField,
    Label,
    FieldError,
    InputGroup,
    Button,
} from "@heroui/react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client"; // update path to your actual authClient

export default function SignUpPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (field) => (value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            toast.error("Please fill in all fields");
            return;
        }

        if (formData.password.length < 8) {
            toast.error("Password must be at least 8 characters");
            return;
        }

        setIsLoading(true);

        try {
            const { error } = await authClient.signUp.email({
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            if (error) {
                toast.error(error.message || "Something went wrong");
                setIsLoading(false);
                return;
            }

            toast.success("Account created! Redirecting to sign in...");

            // Give the toast time to actually show before navigating away
            setTimeout(() => {
                router.push("/auth/sign-in");
            }, 1800);
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-[#0e0e10] px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="mb-8 flex justify-center">
                    <Link href="/">
                        <Image src="/images/logo.png"
                            alt="hireloop"
                            priority
                            className="h-12 w-auto"
                            width={120}
                            height={120} />
                    </Link>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-white/5 bg-[#1c1c1f] p-8">
                    <h1 className="text-center text-2xl font-semibold text-white">
                        Create your account
                    </h1>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Sign up to get started with hireloop
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                        {/* Name */}
                        <TextField
                            name="name"
                            isRequired
                            value={formData.name}
                            onChange={handleChange("name")}
                        >
                            <Label className="text-sm text-gray-300">Full Name</Label>
                            <InputGroup className="bg-black/30 border-white/10">
                                <InputGroup.Prefix>
                                    <FiUser className="text-gray-400" />
                                </InputGroup.Prefix>
                                <InputGroup.Input placeholder="Enter your name" />
                            </InputGroup>
                            <FieldError className="text-xs text-red-400" />
                        </TextField>

                        {/* Email */}
                        <TextField
                            name="email"
                            type="email"
                            isRequired
                            value={formData.email}
                            onChange={handleChange("email")}
                        >
                            <Label className="text-sm text-gray-300">Email</Label>
                            <InputGroup className="bg-black/30 border-white/10">
                                <InputGroup.Prefix>
                                    <FiMail className="text-gray-400" />
                                </InputGroup.Prefix>
                                <InputGroup.Input placeholder="Enter your email" type="email" />
                            </InputGroup>
                            <FieldError className="text-xs text-red-400" />
                        </TextField>

                        {/* Password */}
                        <TextField
                            name="password"
                            isRequired
                            value={formData.password}
                            onChange={handleChange("password")}
                        >
                            <Label className="text-sm text-gray-300">Password</Label>
                            <InputGroup className="bg-black/30 border-white/10">
                                <InputGroup.Prefix>
                                    <FiLock className="text-gray-400" />
                                </InputGroup.Prefix>
                                <InputGroup.Input
                                    placeholder="Create a password"
                                    type={showPassword ? "text" : "password"}
                                />
                                <InputGroup.Suffix>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label="Toggle password visibility"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </InputGroup.Suffix>
                            </InputGroup>
                            <FieldError className="text-xs text-red-400" />
                        </TextField>

                        <Button
                            type="submit"
                            isLoading={isLoading}
                            className="mt-2 rounded-lg bg-[#5b4af0] py-6 font-medium text-white"
                        >
                            Sign Up
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-400">
                        Already have an account?{" "}
                        <Link
                            href="/auth/sign-in"
                            className="font-medium text-[#6c7bff] hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}