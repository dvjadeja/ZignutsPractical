import React from "react";

const ListingCard = ({ data, index }) => {
  return (
    <div className="card" key={index}>
      <div className="card__body">
        <span
          className={`tag ${
            data.status === "read" ? "tag-read" : "tag-unread"
          }`}
        >
          {data.status}
        </span>
        <h3 className="card__title">Invites</h3>
        <p className="card__description">{data.invite}</p>
      </div>
    </div>
  );
};

export default ListingCard;
