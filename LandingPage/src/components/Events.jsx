import React from "react";

const events = [
    {
        id: 1,
        image: "https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=",
        title: "Cricket",
        host: "abcd",
        date: "Sun, 16 Nov 2024",
        attendees: 9,
        price: "Free",
    },
    {
        id: 2,
        image: "https://cdn.prod.website-files.com/5ca5fe687e34be0992df1fbe/6235ea7fbaf601e8d3980228_boy-kicking-ball-on-football-field-2021-09-24-03-47-56-utc-min-min.jpg",
        title: "Football",
        host: "abcd",
        date: "Fri, Nov 22 · 7:00 PM IST",
        attendees: 25,
        price: "Free",
    },{
        id: 2,
        image: "https://cdn.pixabay.com/photo/2016/05/31/23/21/badminton-1428046_1280.jpg",
        title: "Badminton",
        host: "abcd",
        date: "Fri, Nov 22 · 7:00 PM IST",
        attendees: 25,
        price: "Free",
    },

];

const Events= () => {
    return (
        <section className=" py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                            <p className="text-sm text-gray-600 mb-1">Hosted by: {event.host}</p>
                            <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                            <p className="text-sm text-gray-800">
                                <span className="font-medium">{event.attendees} going</span> ·{" "}
                                <span className="font-medium">{event.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;
