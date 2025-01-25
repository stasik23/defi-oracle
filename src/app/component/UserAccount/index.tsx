import { ProfileProps } from "@/types/IProfile";

export const UserAccount: React.FC<ProfileProps> = ({ avatarUrl, name, email, role, stats, actions }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-6 shadow-md w-full max-w-md mx-auto">
      {/* Avatar and basic info */}
      <div className="flex items-center gap-4">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-16 h-16 rounded-full border-2 border-gray-700"
        />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          {email && <p className="text-gray-400 text-sm">{email}</p>}
          {role && <span className="text-blue-500 text-sm">{role}</span>}
        </div>
      </div>
      {/* Statistics Section */}
      {/*
        stats && stats.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        )
      */}
      {/* Action Buttons
        {actions && actions.length > 0 && (
          <div className="mt-6 flex gap-4 justify-center">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
              >
                {action.label}
              </button>
            ))}
          </div>
        )} */}
    </div>
  );
};