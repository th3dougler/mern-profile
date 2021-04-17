import UserListItem from "./UserListItem/UserListItem";

function UserList(props) {
  return (
    <div className='UserList'>
      {props.data.length ? (
        props.data.map((user) => <UserListItem key={user._id} user={user} />)
      ) : (
        <span>No Users</span>
      )}
    </div>
  );
}

export default UserList;
