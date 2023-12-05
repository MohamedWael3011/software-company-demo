import { Facebook, Instagram, Twitter } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="text-primary">
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-primary
        duration-300 "
        >
            <Facebook/>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-primary
        duration-300 "
        >
            <Twitter/>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-primary
        duration-300 "
        >
            <Instagram/>
        </span>
    </div>
  );
};

export default SocialIcons;