import { ChefHat } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#D8D9D8] px-4 py-3 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl md:text-3xl font-playfair font-semibold text-black hover:opacity-80 transition">
                MyReceipt
                <ChefHat size={28} className="text-black" />
            </div>

            {/* Copyright */}
            <div className="flex items-center ml-8">
                <p className="text-black text-sm font-inter">
                    &copy; {new Date().getFullYear()} MyReceipt. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
