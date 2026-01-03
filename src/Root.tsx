import { Link, Outlet } from "@tanstack/react-router";

export default function Root() {
  return (
    <>
      <h1>Hello World</h1>
      <Link to='/' className='[&.active]:font-bold'>
        Home
      </Link>{" "}
      <Link to='/login' className='[&.active]:font-bold'>
        Login
      </Link>{" "}
      <Link to='/register' className='[&.active]:font-bold'>
        Register
      </Link>
      <hr />
      <Outlet />
    </>
  );
}
