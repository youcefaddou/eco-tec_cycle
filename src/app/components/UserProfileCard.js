import Image from "next/image";

export default function UserProfileCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-full max-w-xs">
      {user.image && (
        <Image src={user.image} alt={user.name || user.email} width={80} height={80} className="rounded-full mb-3" />
      )}
      <div className="text-lg font-bold text-green-800 mb-1">{user.name || "Utilisateur"}</div>
      <div className="text-sm text-gray-700 mb-2">{user.email}</div>
    </div>
  );
} 