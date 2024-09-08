import Image from "next/image";

function imageLoader({ src }: { src: string }) {
    return `https://cdn.jsdelivr.net/gh/zen-browser/${src}`;
}

export default function CachedImage({ ...props }: any) {
    return <Image {...props} loader={imageLoader} />;
}
