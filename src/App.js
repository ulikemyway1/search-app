import React from "react";
import { useEffect, useState } from "react";
import UserList from "./UserList/UserList";
import UserSearch from "./UserSearch/UserSearch";
import getUsersDataBase from "./services/getUsersDataBase";
import Spinner from "./UIKit/Spinner";
import InitialPlaceholder from "./InitialPlaceholder/InitialPlaceholder";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent/ErrorComponent";
import Popup from "./Popup/Popup";

function App() {
  const [usersDataBase, setUsersDataBase] = useState([]);
  const [targetUser, setTargetUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getUsersDataBase()
      .then((usersData) => {
        setUsersDataBase(usersData);
      })
      .catch(() => setHasError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ErrorBoundary
      fallback={<div>Something went wrong. Please, reload page.</div>}
    >
      <div className="app">
        {loading && <Spinner text="Loading database..." />}
        {!loading && (
          <View
            setTargetUser={setTargetUser}
            usersDataBase={usersDataBase}
            targetUser={targetUser}
            setSelectedUser={setSelectedUser}
            setShow={setShow}
          />
        )}
        {!targetUser && !loading && <InitialPlaceholder />}
        {hasError && <ErrorComponent />}
      </div>
      <Popup selectedUser={selectedUser} show={show} setShow={setShow} />
    </ErrorBoundary>
  );
}

export default App;

const View = ({
  setTargetUser,
  usersDataBase,
  targetUser,
  setSelectedUser,
  setShow,
}) => {
  return (
    <>
      <UserSearch setTargetUser={setTargetUser} />
      <UserList
        users={usersDataBase}
        targetName={targetUser}
        setSelectedUser={setSelectedUser}
        setShow={setShow}
      />
    </>
  );
};
