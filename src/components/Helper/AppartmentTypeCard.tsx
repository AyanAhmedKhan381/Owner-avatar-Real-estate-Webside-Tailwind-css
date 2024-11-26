import Image from "next/image";



interface Props {
    data: {
        id: number;
        icon: string;
        type: string;
        number: number;
    }
}

const AppartmentTypeCard = ({ data }: Props) => {
    return (
        <div className='rounded-lg shadow-lg p-6 hover:scale-105 transition-all duration-300'>
            <Image 
                src={data.icon} // Use the icon URL from the data
                alt={data.type} // Use the type as alt text for better accessibility
                width={100} // Set an appropriate width
                height={100} // Set an appropriate height
            />
            <h1 className='mt-4 text-lg font-semibold'>{data.type}</h1>
            <p className='text-gray-600'>{data.number} apartments available</p>
        </div>
    )
}

export default AppartmentTypeCard;
