import React, { useEffect, useState } from "react";
import loqo from "../assets/images/loqo.png";

const Card = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const fakeData = [
    {
      id: "#101",
      place: "Bella Napoli",
      customer: "Aylin Huseynova",
      pickupTime: "12:15PM",
      status: "QUEUE",
      timer: "00:00:00",
      buttonText: "START COOKING",
      items: [
        { name: "Margherita Pizza", quantity: 2 },
        { name: "Caesar Salad", quantity: 1 },
        {
          name: "Spaghetti Carbonara",
          quantity: 1,
          details: ["Extra Parmesan", "No Bacon"],
        },
        { name: "Garlic Bread", quantity: 1 },
      ],
    },
    {
      id: "#102",
      place: "Sushi World",
      customer: "Rashad Aliyev",
      pickupTime: "12:20PM",
      status: "COOKING",
      timer: "00:10:30",
      buttonText: "FINISH COOKING",
      items: [
        { name: "Salmon Nigiri", quantity: 8 },
        {
          name: "Dragon Roll",
          quantity: 2,
          details: ["Extra Avocado"],
        },
        { name: "Miso Soup", quantity: 2 },
        { name: "Edamame", quantity: 1 },
        { name: "Green Tea", quantity: 1 },
      ],
    },
    {
      id: "#103",
      place: "Green Garden",
      customer: "Leyla Mammad",
      pickupTime: "12:25PM",
      status: "DELAYED",
      timer: "00:18:45",
      buttonText: "FINISH COOKING",
      items: [
        { name: "Vegan Burger", quantity: 1 },
        { name: "Sweet Potato Fries", quantity: 1 },
        { name: "Fresh Orange Juice", quantity: 2 },
        { name: "Quinoa Salad", quantity: 1 },
      ],
    },
    {
      id: "#104",
      place: "Steak House",
      customer: "Kamran Ismayilov",
      pickupTime: "12:30PM",
      status: "QUEUE",
      timer: "00:00:00",
      buttonText: "START COOKING",
      items: [
        { name: "Ribeye Steak", quantity: 1, details: ["Medium Rare"] },
        { name: "Mashed Potatoes", quantity: 1 },
        { name: "Caesar Salad", quantity: 1 },
        { name: "Grilled Asparagus", quantity: 1 },
        { name: "Garlic Bread", quantity: 1 },
      ],
    },
    {
      id: "#105",
      place: "Mama's Kitchen",
      customer: "Nigar Ahmadova",
      pickupTime: "12:35PM",
      status: "COOKING",
      timer: "00:07:12",
      buttonText: "FINISH COOKING",
      items: [
        { name: "Chicken Biryani", quantity: 2 },
        { name: "Raita", quantity: 2 },
        { name: "Naan Bread", quantity: 4 },
        { name: "Mango Lassi", quantity: 1 },
        { name: "Papadum", quantity: 1 },
      ],
    },
    {
      id: "#106",
      place: "Pasta Fresca",
      customer: "Elvin Quliyev",
      pickupTime: "12:40PM",
      status: "QUEUE",
      timer: "00:00:00",
      buttonText: "START COOKING",
      items: [
        { name: "Fettuccine Alfredo", quantity: 1 },
        { name: "Garlic Bread", quantity: 1 },
        { name: "House Salad", quantity: 1 },
        { name: "Bruschetta", quantity: 1 },
      ],
    },
    {
      id: "#107",
      place: "BBQ Corner",
      customer: "Sevda Abbasova",
      pickupTime: "12:45PM",
      status: "DELAYED",
      timer: "00:12:30",
      buttonText: "FINISH COOKING",
      items: [
        { name: "Pulled Pork Sandwich", quantity: 1 },
        { name: "Coleslaw", quantity: 1 },
        { name: "Sweet Tea", quantity: 1 },
        { name: "Cornbread", quantity: 1 },
      ],
    },
    {
      id: "#108",
      place: "Taco Fiesta",
      customer: "Javid Mehdiyev",
      pickupTime: "12:50PM",
      status: "COOKING",
      timer: "00:05:45",
      buttonText: "FINISH COOKING",
      items: [
        { name: "Beef Taco", quantity: 3 },
        { name: "Guacamole", quantity: 1 },
        { name: "Churros", quantity: 2 },
        { name: "Salsa", quantity: 1 },
        { name: "Refried Beans", quantity: 1 },
      ],
    },
    {
      id: "#109",
      place: "Seafood Shack",
      customer: "Gunel Ibrahimova",
      pickupTime: "12:55PM",
      status: "QUEUE",
      timer: "00:00:00",
      buttonText: "START COOKING",
      items: [
        { name: "Grilled Salmon", quantity: 1 },
        { name: "Steamed Veggies", quantity: 1 },
        { name: "Lemon Butter Sauce", quantity: 1 },
        { name: "Rice Pilaf", quantity: 1 },
      ],
    },
    {
      id: "#110",
      place: "Baklava House",
      customer: "Farid Guliyev",
      pickupTime: "1:00PM",
      status: "QUEUE",
      timer: "00:00:00",
      buttonText: "START COOKING",
      items: [
        { name: "Baklava", quantity: 3 },
        { name: "Turkish Coffee", quantity: 2 },
        { name: "Mint Tea", quantity: 1 },
        { name: "Baklava Ice Cream", quantity: 1 },
      ],
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "COOKING":
        return "bg-orange-500";
      case "DELAYED":
        return "bg-red-600";
      case "QUEUE":
        return "bg-gray-600";
      default:
        return "bg-blue-500";
    }
  };

  const buttonColor = (buttonText) => {
    switch (buttonText) {
      case "FINISH COOKING":
        return "bg-orange-500 hover:bg-orange-600 transition";
      case "START COOKING":
        return "bg-gray-800 hover:bg-gray-900 transition";
      default:
        return "bg-blue-500 hover:bg-blue-600 transition";
    }
  };

  const CardItem = ({ order }) => {
    const [currentTime, setCurrentTime] = useState(order.timer);

    //*Sifarisin bitmesini gosteren timer
    useEffect(() => {
      if (order.buttonText === "FINISH COOKING") {
        const interval = setInterval(() => {
          setCurrentTime((prev) => {
            const [hours, minutes, seconds] = prev.split(":").map(Number);
            let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
            if (totalSeconds < 0) {
              clearInterval(interval);
              return "00:00:00";
            }
            const newHours = Math.floor(totalSeconds / 3600);
            const newMinutes = Math.floor((totalSeconds % 3600) / 60);
            const newSeconds = totalSeconds % 60;
            return `${newHours.toString().padStart(2, "0")}:${newMinutes
              .toString()
              .padStart(2, "0")}:${newSeconds.toString().padStart(2, "0")}`;
          });
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [order.buttonText]);

    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-300 w-72 h-auto flex flex-col transition-transform hover:scale-[1.03] hover:shadow-2xl">
        <div className="p-5 border-b border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="font-bold text-base text-gray-900">
                {order.id} {order.place}
              </h2>
              <p className="text-sm text-gray-600">{order.customer} • Pickup</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Due {order.pickupTime}</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mt-2 ${statusColor(
                  order.status
                )}`}
              >
                {order.status}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 p-5 bg-gray-50 max-h-64 overflow-y-auto space-y-3">
          {order.items.map((item, i) => (
            <div key={i} className="text-sm">
              <div className="font-medium text-gray-900">
                {item.quantity} {item.name}
              </div>
              {item.details &&
                item.details.map((detail, j) => (
                  <div key={j} className="ml-5 text-xs text-gray-600 italic">
                    {detail}
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="p-4 bg-white border-t border-gray-200 rounded-b-xl">
          <div className="flex items-center justify-between">
            <button
              className={`text-white text-xs font-semibold px-4 py-2 rounded transition-colors cursor-pointer  ${buttonColor(
                order.buttonText
              )}`}
            >
              {order.buttonText}
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-mono text-gray-700">
                {currentTime}
              </span>
              <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const filteredData =
    activeFilter === null
      ? fakeData
      : fakeData.filter((order) => order.status === activeFilter);

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: "#1e1e1e" }}>
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <img src={loqo} alt="Logo" className="h-11 mb-4 md:mb-0" />
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 text-white rounded-lg transition cursor-pointer ${
              activeFilter === null
                ? "bg-orange-800"
                : "bg-orange-600 hover:bg-orange-700"
            }`}
          >
            OVERVIEW
          </button>
          <button
            onClick={() => setActiveFilter("COOKING")}
            className={`px-4 py-2 text-white rounded-lg transition cursor-pointer ${
              activeFilter === "COOKING"
                ? "bg-orange-700"
                : "bg-orange-600 hover:bg-orange-700"
            }`}
          >
            COOKING
          </button>
          <button
            onClick={() => setActiveFilter("DELAYED")}
            className={`px-4 py-2 text-white rounded-lg transition cursor-pointer ${
              activeFilter === "DELAYED"
                ? "bg-red-800"
                : "bg-red-700 hover:bg-red-800"
            }`}
          >
            DELAYED
          </button>
          <button
            onClick={() => setActiveFilter("QUEUE")}
            className={`px-4 py-2 text-white rounded-lg transition cursor-pointer ${
              activeFilter === "QUEUE"
                ? "bg-gray-800"
                : "bg-gray-700 hover:bg-gray-800"
            }`}
          >
            QUEUE
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {filteredData.map((order, index) => (
          <CardItem key={index} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Card;
