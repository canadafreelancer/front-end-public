import {
  MdDesignServices,
  MdOutlineBusinessCenter,
  MdOutlineEngineering,
  MdOutlineComputer,
  MdOutlineNightlife,
} from "react-icons/md";
import { BsMic, BsPencilSquare } from "react-icons/bs";
import { BiSupport, BiBook } from "react-icons/bi";
import { FaHandshake, FaUsers } from "react-icons/fa";
import { AiOutlineVideoCamera } from "react-icons/ai";

const services = [
  {
    id: 1,
    category: `Tech & Programming`,
    icon: <MdOutlineComputer />,
    path: "/category/tech",
  },
  {
    id: 2,
    category: `Design & Creative`,
    icon: <MdDesignServices />,
    path: "/category/design",
  },
  {
    id: 3,
    category: `Sales & Marketing`,
    icon: <MdOutlineBusinessCenter />,
    path: "/category/sales",
  },
  {
    id: 4,
    category: `Writing & Translation`,
    icon: <BsPencilSquare />,
    path: "/category/writing",
  },
  {
    id: 5,
    category: `Video & Animation`,
    icon: <AiOutlineVideoCamera />,
    path: "/category/video",
  },
  {
    id: 6,
    category: `Lifestyle`,
    icon: <FaUsers />,
    path: "/category/lifestyle",
  },
  {
    id: 7,
    category: `Music & Audio`,
    icon: <BsMic />,
    path: "/category/music",
  },
  {
    id: 8,
    category: `Business`,
    icon: <FaHandshake />,
    path: "/category/business",
  },
];

export default services;
