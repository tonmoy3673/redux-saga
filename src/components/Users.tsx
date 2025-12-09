import type { Users } from "../features/users/userTypes";

interface UsersProps {
  users: Users;
}

const Users = ({ users }: UsersProps) => {
  const { id,name,email, } = users;
  return (
    <div className="flex justify-center mx-auto border border-gray-400 p-3 rounded-md">
      <div className="flex-1 text-start w-full md:w-86">
        <p>Id : {id}</p>
      <h4>Name : {name}</h4>
      <p>Email : {email}</p>
      </div>
    </div>
  );
};

export default Users;
