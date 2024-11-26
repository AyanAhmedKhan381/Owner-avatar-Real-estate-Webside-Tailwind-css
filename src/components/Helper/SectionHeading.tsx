type Props = {
  heading: string;
  subHeading: string;
  className?: string;
};

const SectionHeading = ({ heading, subHeading, className }: Props) => {
  return (
    <div>
      <h1 className={`text-2xl sm:text-3xl font-bold mb-2 text-gray-800 ${className || ''}`}>
        {heading}
      </h1>
      <p className={`text-sm text-gray-700 ${className || ''}`}>
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeading;
