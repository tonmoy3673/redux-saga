import type { Users as UserType } from "../features/users/userTypes";

interface UsersProps {
  users: UserType;
}

const UserCard = ({ users }: UsersProps) => {
  const { name, email, company, address } = users;
  
  // High quality avatar from unavatar.io using email hash or dicebear
  const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(email)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffdfbf`;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-slate-200 flex flex-col h-full h-[320px]">
      {/* Background Gradient Header */}
      <div className="h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative transition-transform duration-500 group-hover:scale-105">
        <div className="absolute -bottom-10 w-full flex justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
          <div className="h-20 w-20 rounded-full border-4 border-white bg-white shadow-md overflow-hidden outline outline-slate-100 outline-1">
            <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="pt-14 px-6 pb-6 flex-1 flex flex-col items-center text-center">
        <h3 className="text-[1.1rem] font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-1 w-full relative z-10" title={name}>
          {name}
        </h3>
        <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase mt-1 mb-4 flex items-center justify-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          {company.name}
        </p>
        
        {/* Info badges */}
        <div className="mt-auto w-full space-y-2">
          <div className="flex items-center text-sm text-slate-600 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
            <svg className="w-4 h-4 mr-2.5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span className="truncate">{email}</span>
          </div>
          <div className="flex items-center text-sm text-slate-600 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
            <svg className="w-4 h-4 mr-2.5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span className="truncate">{address.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
