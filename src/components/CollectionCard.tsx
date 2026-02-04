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
      className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col"
      onClick={() => navigate(link)}
    >
      {/* Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4 line-clamp-3">{description}</p>

        <button className="mt-auto py-3 px-6 rounded-full bg-maroon text-white font-semibold hover:bg-maroon/90 transition-colors">
          Explore
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
