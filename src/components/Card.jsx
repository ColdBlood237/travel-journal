/* eslint-disable react/prop-types */
import location from "../assets/location.png";

export default function Card({ item }) {
  return (
    <div className="card">
      <img src={item.imageUrl} alt={item.title} />
      <p>
        <img src={location} alt="pin location" />
        <span className="country">JAPAN</span>
        <a className="maps-link">View on Google Maps</a>
      </p>
      <h1>{item.title}</h1>
      <h2>
        {item.startDate} - {item.endDate}
      </h2>
      <p>{item.description}</p>
    </div>
  );
}
