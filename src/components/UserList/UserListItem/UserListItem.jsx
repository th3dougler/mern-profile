function UserListItem(props) {
  return (
    <div className='UserListItem'>
      <strong>{props.user.username}</strong>
      <em>{props.user.email}</em>
    </div>
  );
}
export default UserListItem;
