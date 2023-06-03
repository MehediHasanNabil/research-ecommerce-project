import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <Navbar className="container shadow sticky top-0">
      <Link to="/" className="text-3xl font-bold">
        Dashboard
      </Link>

      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link to="">Dashboard</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/account">Account</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/settings">Settings</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
