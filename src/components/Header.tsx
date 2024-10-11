import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = ({ styles }: { styles: string }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Borrower", path: "/borrower" },
    { name: "Referrals", path: "/referrals" },
    { name: "Brokers", path: "/brokers" },
    { name: "Lenders", path: "/lenders" },
    { name: "Funded Loans", path: "/funded-loans" },
    { name: "Resources", path: "/resources" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false); // Close the mobile menu after navigation
  };

  return (
    <header className="relative">
      <div className={`z-10 text-white px-4 md:px-20 pt-4 ${styles}`}>
        <div className="container mx-auto flex justify-between items-center">
          <img
            onClick={() => handleNavigation("/")}
            src="logo.png"
            alt="logo"
            className="w-32 max-w-full cursor-pointer"
          />
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link, _) => (
              <a
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className="hover:text-gray-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu width={32} />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 z-20 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>

        <div
          className={`fixed z-30 top-0 right-0 w-full max-w-xs bg-black text-white h-full transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <img
              src="logo.png"
              alt="logo"
              className="w-32 max-w-full"
              onClick={() => handleNavigation("/")}
            />
            <button onClick={toggleMenu} className="text-white">
              <X width={32} />
            </button>
          </div>
          <nav className="flex flex-col space-y-8 px-4 py-4">
            {navLinks.map((link, _) => (
              <a
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className="pl-10 hover:text-gray-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
