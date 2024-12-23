import React from "react";

const peopleData = [
  {
    id: 1,
    name: "Nikhil Kamath",
    image: "https://zerodha.com/static/images/Nikhil.jpg",
    size: "w-50",
    designation: "Co-founder & CFO",
  },
  {
    id: 2,
    name: "Dr. Kailash Nadh",
    image: "https://zerodha.com/static/images/Kailash.jpg",
    size: "w-50",
    designation: "CTO",
  },
  {
    id: 3,
    name: "Venu Madhav",
    image: "https://zerodha.com/static/images/Venu.jpg",
    size: "w-50",
    designation: "COO",
  },
  {
    id: 4,
    name: "Hanan Delvi",
    image: "https://zerodha.com/static/images/Hanan.jpg",
    size: "w-50",
    designation: "CCO",
  },
  {
    id: 5,
    name: "Seema Patil",
    image: "https://zerodha.com/static/images/Seema.jpg",
    size: "w-50",
    designation: "Director",
  },
  {
    id: 6,
    name: "Karthik Rangappa",
    image: "https://zerodha.com/static/images/karthik.jpg",
    size: "w-50",
    designation: "Chief of Education",
  },
  {
    id: 6,
    name: "Austin Prakesh ",
    image: "https://zerodha.com/static/images/Austin.jpg",
    size: "w-50",
    designation: "Director Strategy",
  },
];

const Peoples = () => {
  return (
    <div className="container">
      <div className="row row-cols-md-3 row-cols-1 align-items-center justify-content-center g-md-3 g-4   mx-auto text-center">
        {peopleData.map((person) => (
          <div key={person.id} className="col">
            <img
              src={person.image}
              alt={person.name}
              className={`rounded-circle ${person.size} d-block mx-auto`}
            />

            <div className="mt-3 mb-2">{person.name}</div>
            <div>{person.designation}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Peoples;
