"use client"; // Ensure this is a client-side component

import { useUser } from "@clerk/nextjs";

const WelcomeUser = () => {
  const { user } = useUser(); // Retrieve the user object from Clerk

  return (
    <div className="text-white text-xl">
      {user ? (
        <p>Welcome, {user.firstName}!</p> // Display the first name if available
      ) : (
        <p>Welcome, Guest!</p> // Fallback if no user is logged in
      )}
    </div>
  );
};

export default WelcomeUser;
