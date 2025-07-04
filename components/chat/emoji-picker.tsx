import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Smile } from "lucide-react";
import data from "@emoji-mart/data";

const Picker = dynamic(
    () => import("@emoji-mart/react").then((mod) => mod.default),
    { ssr: false }
);

interface EmojiPickerProps {
    onChange: (value: string) => void;
}

export const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
    const { resolvedTheme } = useTheme();

    return (
        <Popover>
            <PopoverTrigger>
                <Smile className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition" />
            </PopoverTrigger>
            <PopoverContent
                side="right"
                sideOffset={40}
                className="bg-transparent border-none shadow-none drop-shadow-none mb-16"
            >
                <Picker
                    theme={resolvedTheme}
                    data={data}
                    onEmojiSelect={(emoji: { native: string }) => onChange(emoji.native)}
                />
            </PopoverContent>
        </Popover>
    );
}