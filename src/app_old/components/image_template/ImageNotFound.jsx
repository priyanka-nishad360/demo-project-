import { Icon } from "@iconify/react";
export default function ImageNotFound(prop) {
    const {message="Image Not Found"} = prop
    return (
		<span className="grid place-items-center grid-rows-[2fr_1fr] h-36 w-36 font-extrabold  bg-neutral-200 dark:bg-neutral-700">
			<Icon icon='mdi:image-off' className="h-20 w-20" />
            <span>{message}</span>
		</span>
	);
}
