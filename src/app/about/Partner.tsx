import Image from 'next/image';
import Link from 'next/link';

type PartnerProps = {
    name: string;
    image: string;
    url: string;
}

export default function Partner(props: PartnerProps) {
    return (
        <span className="flex-initial">
            <Link href={props.url}>
                <Image 
                    width={200} 
                    height={0} 
                    src={props.image} 
                    alt={props.name} 
                    title={props.name}
                    className="object-scale-down min-w-60 max-h-40" />
            </Link>
        </span>
    )
}