"use client";

const Banner = () => {
  const handleOnclick = () => {
    console.log("Banner button clicked!");
    // You can add more functionality here, such as navigating to a different page
    // or opening a modal.
    alert("Welcome to Coffee Connoisseur!");
  };

  return (
    <div>
      <h1 className="bg-green-400">Coffee Connoisseur</h1>
      <p className="text-gray-600">Discover your local coffee shops!</p>
      <button onClick={handleOnclick}>View Stores Nearby</button>
    </div>
  );
};

export default Banner;
