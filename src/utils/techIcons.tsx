import { 
  FaReact, 
  FaNodeJs, 
  FaBootstrap,
  FaDatabase,
  FaJsSquare,
  FaUnity,
  FaServer,
  FaAndroid,
  FaPython
} from 'react-icons/fa';

import {
  SiMaterialui,
  SiMongodb,
  SiNextdotjs,
  SiMysql,
  SiExpress,
  SiTypescript,
  SiFirebase,
  SiCsharp,
  SiTailwindcss
} from 'react-icons/si';

export const techIcons: Record<string, JSX.Element> = {
  "React JS": <FaReact className="w-6 h-6 text-[#61DAFB]" />,
  "Node JS": <FaNodeJs className="w-6 h-6 text-[#339933]" />,
  "MUI": <SiMaterialui className="w-6 h-6 text-[#007FFF]" />,
  "Bootstrap": <FaBootstrap className="w-6 h-6 text-[#7952B3]" />,
  "SQLite": <FaDatabase className="w-6 h-6 text-[#003B57]" />,
  "ExcelJS": <FaJsSquare className="w-6 h-6 text-[#F7DF1E]" />,
  "Express": <SiExpress className="w-6 h-6 text-[#000000] dark:text-[#FFFFFF]" />,
  "JSPDF": <FaJsSquare className="w-6 h-6 text-[#F7DF1E]" />,
  "SQL": <SiMysql className="w-6 h-6 text-[#4479A1]" />,
  "Unity": <FaUnity className="w-6 h-6 text-[#000000] dark:text-[#FFFFFF]" />,
  "C#": <SiCsharp className="w-6 h-6 text-[#239120]" />,
  "MongoDB": <SiMongodb className="w-6 h-6 text-[#47A248]" />,
  "Next JS": <SiNextdotjs className="w-6 h-6 text-[#000000] dark:text-[#FFFFFF]" />,
  "Tailwind": <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />,
  "TypeScript": <SiTypescript className="w-6 h-6 text-[#3178C6]" />,
  "APIInteg": <FaServer className="w-6 h-6 text-[#000000] dark:text-[#FFFFFF]" />,
  "Android Studio": <FaAndroid className="w-6 h-6 text-[#3DDC84]" />,
  "Firebase": <SiFirebase className="w-6 h-6 text-[#FFCA28]" />
};
