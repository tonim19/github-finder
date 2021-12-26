import React, { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
const UserItem = React.lazy(() => import("./UserItem"));

const UserResults = () => {
  const { users } = useContext(GithubContext);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      <React.Suspense fallback={<Spinner />}>
        {users &&
          users.map((user) => {
            return <UserItem key={user.id} user={user} />;
          })}
      </React.Suspense>
    </div>
  );
};

export default UserResults;
