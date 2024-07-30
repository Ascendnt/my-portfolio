import React from "react";

const navbar = () => {
  const navLinks = [
    {
      name: "Home",
      href: "/",
      current: true,
    },
    {
      name: "About me",
      href: "/",
      current: false,
    },
  ];
  return (
    <section className="home">
      <nav className="bg-black">
        <div className="flex items-center justify-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white">
              {" "}
              Home
            </a>
            {/* will change the logo later */}
            <a href="/" className="text-white mx-5">
              {" "}
              logo
            </a>
            <a href="/" className="text-white">
              {" "}
              About me
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default navbar;
