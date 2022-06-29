import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import invites from "../utils/invitations";
import invitation_update from "../utils/invitation_update";
import ListingCard from "../Components/ListingCard";

const Dashboard = () => {
  // eslint-disable-next-line
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [invitations, setInvitations] = useState([]);
  const [updatedInvitation, setUpdatedInvitation] = useState([]);
  const [counter, setCounter] = useState(null);

  const getInvitations = () => {
    const invitationList = invites.filter(
      (invite) => user.userId === Number(invite.user_id)
    );

    setInvitations(invitationList);
  };

  const getUpdateInvitation = () => {
    const updatedInvites = invitation_update.filter(
      (invite) => user.userId === Number(invite.user_id)
    );
    setUpdatedInvitation(updatedInvites);
    setCounter(0);
  };

  useEffect(() => {
    getInvitations();
    getUpdateInvitation();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (counter >= updatedInvitation.length) {
      return;
    }

    const id = setInterval(() => {
      setInvitations((prev) => [...prev, updatedInvitation[counter]]);
      setCounter(counter + 1);
    }, 5000);

    return () => clearInterval(id);
    // eslint-disable-next-line
  }, [counter]);

  const logoutHandler = () => {
    toast.success("Logged out successfully");
    localStorage.clear("user");
    window.location.reload();
  };
  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <nav className="nav">
          <ul>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
        <section className="dashboard-section">
          <h1>Invitations List</h1>
          <div className="card-container">
            {invitations.map((item, index) => (
              <ListingCard data={item} inded={index} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
