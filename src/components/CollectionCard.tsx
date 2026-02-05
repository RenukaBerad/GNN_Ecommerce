import { useNavigate } from "react-router-dom";

interface CollectionCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  title,
  image,
  description,
  link,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
      onClick={() => navigate(link)}
    >
      {/* Image */}
      <div className="w-full overflow-hidden aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          style={{ maxHeight: "320px", height: "100%", width: "100%" }}
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2">
          {title}
        </h3>
        <p className="text-gray-500 mb-2 sm:mb-4 line-clamp-3 text-xs sm:text-base">
          {description}
        </p>

        <button className="mt-auto py-2 sm:py-3 px-4 sm:px-6 rounded-full bg-maroon text-white font-semibold hover:bg-maroon/90 transition-colors text-sm sm:text-base">
          Explore
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
