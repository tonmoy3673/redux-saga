import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import Users from "./Users";
import { useEffect } from "react";
import { getUserRequest } from "../features/users/userSlice";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();

//   ============== call function ===========//
useEffect(()=>{
    dispatch(getUserRequest())
},[dispatch])
 
  const { data, error, loading } = useSelector(
    (state: RootState) => state.users
  );

  return (
    <div className="text-center">
      <div>
        <h2 className="py-2">List of All Users </h2>
        <p>Total Users : {data.length}</p>
      </div>

      <div className="py-2">
        {/* ================== loading ============ */}
        {loading && (
          <p className="py-2 text-center text-xl  text-green-500">
            Users list is Loading
          </p>
        )}

        {/* ================== Error ============ */}
        {error && (
          <p className="py-2 text-center text-lg font-semibold text-red-500">
            {error}
          </p>
        )}
      </div>

      {/* ============= map userList =========== */}
      <div className="grid grid-cols-4 gap-5 justify-center items-center">
        {data.map((users) => (
          <Users key={users.id} users={users} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
