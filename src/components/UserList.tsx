import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import UserCard from "./Users";
import { useEffect } from "react";
import { getUserRequest } from "../features/users/userSlice";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUserRequest());
  }, [dispatch]);

  const { data, error, loading } = useSelector(
    (state: RootState) => state.users
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-12 text-center animate-fade-in-up">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          List of All Users
        </h2>
        <p className="text-lg text-gray-500 font-medium">
          Total Users: <span className="font-bold text-indigo-600 px-3 py-1 bg-indigo-50 rounded-full">{data.length}</span>
        </p>
      </div>

      <div>
        {/* ================== loading ============ */}
        {loading && (
          <div className="flex justify-center flex-col items-center py-20 space-y-4 animate-fade-in-up">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-100 border-t-indigo-600"></div>
            <p className="text-indigo-600 font-medium animate-pulse">Fetching users...</p>
          </div>
        )}

        {/* ================== Error ============ */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-xl shadow-sm mx-auto max-w-2xl animate-fade-in-up transition-all hover:shadow-md">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-base font-semibold text-red-800 tracking-tight">Network Error or Fetch Failure</h3>
                <div className="mt-2 text-sm text-red-700 leading-relaxed font-medium">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============= map userList =========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {!loading && data.map((user, idx) => (
          <div key={user.id} className="animate-fade-in-up" style={{ animationDelay: `${(idx % 10) * 80}ms`, opacity: 0 }}>
             <UserCard users={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
