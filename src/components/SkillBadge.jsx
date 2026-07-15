import { motion } from "framer-motion";

export default function SkillBadge({ skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-100"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center text-xl mb-2 font-bold text-blue-600">
        ●
      </div>
      <p className="text-sm font-semibold text-gray-800 text-center">{skill}</p>
    </motion.div>
  );
}
