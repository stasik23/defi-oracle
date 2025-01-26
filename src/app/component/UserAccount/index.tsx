// import { ProfileProps } from "@/types/IProfile";

// export const UserAccount: React.FC<ProfileProps> = ({ avatarUrl, name, email, role, stats, actions }) => {
//   return (
//     <div className="bg-gray-800 text-white rounded-lg p-6 shadow-md w-full max-w-md mx-auto">
//       {/* Avatar and basic info */}
//       <div className="flex items-center gap-4">
//         <img
//           src={avatarUrl}
//           alt="Avatar"
//           className="w-16 h-16 rounded-full border-2 border-gray-700"
//         />
//         <div>
//           <h2 className="text-xl font-bold">{name}</h2>
//           {email && <p className="text-gray-400 text-sm">{email}</p>}
//           {role && <span className="text-blue-500 text-sm">{role}</span>}
//         </div>
//       </div>
//     </div>
//   );
// };
import { ProfileProps } from "@/types/IProfile";

export const UserAccount: React.FC<ProfileProps> = ({ avatarUrl, name }) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-md flex items-center w-full max-w-xs">
      {/* Аватар */}
      <div className="flex-shrink-0">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-10 h-10 rounded-full border-2 border-gray-700"
        />
      </div>

      {/* Основная информация */}
      <div className="flex flex-col">
        <h2 className="text-white text-sm font-bold leading-none">{name}</h2>
      </div>
    </div>
  );
};