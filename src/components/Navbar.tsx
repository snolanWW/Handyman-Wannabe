import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Zap,
  Droplet,
  Paintbrush,
  Ruler,
  Hammer,
  DoorOpen,
  Car as GarageDoor,
  Waves,
  Flower2,
  ClipboardCheck,
  Shield,
  Home as SmartHome,
  Lock,
  Bath,
  Lightbulb,
  Sofa,
  Truck,
  Brush,
  Building2,
  Package,
  ChevronUp,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PhoneCallModal from "./PhoneCallModal";
import MobileServicesPage from "./MobileServicesPage";

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
  megaMenu?: { items: { name: string; icon: any; href?: string }[] }[];
}

const serviceCategories = [
  {
    items: [
      { name: "Carpentry", icon: Hammer },
      { name: "Cleaning", icon: Brush },
      { name: "Electrical", icon: Zap },
      { name: "Flooring", icon: Ruler },
      {
        name: "Furniture Assembly",
        icon: Sofa,
        href: "/services/furniture-assembly",
      },
      { name: "Garage Doors", icon: GarageDoor },
      { name: "Holiday Lighting", icon: Lightbulb },
      { name: "Home Inspections", icon: ClipboardCheck },
      { name: "Home Security", icon: Shield },
      { name: "Landscaping", icon: Flower2 },
    ],
  },
  {
    items: [
      { name: "Locksmithing", icon: Lock },
      { name: "Misc.", icon: Package },
      { name: "Painting & Drywall", icon: Paintbrush },
      { name: "Plumbing", icon: Droplet },
      { name: "Pools & Spas", icon: Bath },
      { name: "Powerwashing", icon: Waves },
      { name: "Property Management", icon: Building2 },
      { name: "Smart Home", icon: SmartHome },
      { name: "Third Party Moving", icon: Truck },
      { name: "Windows & Doors", icon: DoorOpen },
    ],
  },
];

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "SERVICES",
    href: "/services",
    megaMenu: serviceCategories,
  },
  { label: "PROCESS", href: "/how-it-works" },
  { label: "PACKAGES", href: "/packages" },
  { label: "SERVICE AREA", href: "/service-area" },
  {
    label: "MORE",
    href: undefined,
    dropdown: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Meet Our Team", href: "/meet-the-team" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      {
        label: "Customer Portal",
        href: "https://client.housecallpro.com/customer_portal/request-link?token=a723826f09b6469fb06bd0ddb961381b",
        external: true,
        onClick: () => {
          window.open(
            "https://client.housecallpro.com/customer_portal/request-link?token=a723826f09b6469fb06bd0ddb961381b",
            "_blank",
            "noopener,noreferrer",
          );
        },
      },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const lastScrollY = useRef<number>(0);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollPosition = useRef(0);
  let scrollTimeout: NodeJS.Timeout | null = null;
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [showMobileServices, setShowMobileServices] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setMobileSubMenuOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!isScrollingRef.current) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > 0);
          isScrollingRef.current = true;

          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            isScrollingRef.current = false;
          }, 150);
        });
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(label);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    const timeoutId = setTimeout(() => {
      const menuHovered = document.querySelector(".dropdown-menu:hover");
      const triggerHovered = document.querySelector(
        "[data-menu-trigger]:hover",
      );

      if (!menuHovered && !triggerHovered) {
        setDropdownOpen(null);
        setActiveDropdown(null);
      }
    }, 300);

    setDropdownTimeout(timeoutId);
  };

  const handleMegaMenuEnter = (label: string) => {
    if (label === "SERVICES") {
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
      setMegaMenuOpen(true);
    }
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const getServiceUrl = (serviceName: string) => {
    if (serviceName === "Smart Home") {
      return "/services/smart-homes";
    }
    if (serviceName === "Property Management") {
      return "/services/management-companies";
    }
    if (serviceName === "Third Party Moving") {
      return "/services/third-party-moving";
    }
    if (serviceName === "Home Inspections") {
      return "/services/home-inspections";
    }
    if (serviceName === "Misc.") {
      return "/services/misc";
    }
    if (serviceName === "General Assembly") {
      return "/services/furniture-assembly";
    }

    const slug = serviceName
      .toLowerCase()
      .replace(/\s+&\s+|-/g, "-")
      .replace(/\s+/g, "-");
    return `/services/${slug}`;
  };

  const currentPath = location.pathname;
  const shouldUseBlackText =
    [
      "/services",
      "/packages",
      "/how-it-works",
      "/about-us",
      "/careers",
      "/meet-the-team",
      "/service-area",
      "/contact",
      "/faq",
      "/accessibility",
      "/sitemap",
      "/blog",
      "/404",
    ].includes(currentPath) ||
    currentPath.includes("404") ||
    currentPath.includes("not-found") ||
    window.location.pathname.includes("404") ||
    window.location.href.includes("404") ||
    currentPath === "*";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileSubMenuOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  const toggleMobileSubMenu = (label: string) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === label ? null : label);
  };

  const kebabCase = (str: string) => {
    return str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  };

  const handleServiceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobile) {
      setIsMobileServicesOpen(true);
      setIsOpen(false);
    } else {
      setMegaMenuOpen(!megaMenuOpen);
    }
  };

  useEffect(() => {
    if (isMobileServicesOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileServicesOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const currentScrollY = window.scrollY;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);

      if (scrollDiff > 5) {
        window.requestAnimationFrame(() => {
          setIsScrolled(currentScrollY > 0);
          lastScrollY.current = currentScrollY;
        });
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuOpen) {
        const megaMenu = document.querySelector(".mega-menu-container");
        if (
          megaMenu &&
          !megaMenu.contains(event.target) &&
          !event.target.closest('[data-menu-trigger="SERVICES"]')
        ) {
          setMegaMenuOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(scrollTimeout);
    };
  }, [megaMenuOpen]);

  return (
    <>
      {isMobileServicesOpen && isMobile && (
        <div className="fixed inset-0 z-[60] bg-white">
          <MobileServicesPage onClose={() => setIsMobileServicesOpen(false)} />
        </div>
      )}
      {showMobileServices && isMobile && (
        <div className="fixed inset-0 z-[60] bg-white">
          <MobileServicesPage onClose={() => setShowMobileServices(false)} />
        </div>
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/75 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
        ref={navRef} // Added ref for potential future use
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-center justify-between h-28 px-8">
            <Link
              to="/"
              className="flex-shrink-0"
              aria-label="Handyman Wannabe - Home"
            >
              <img
                src="/images/Handyman_Logo.png"
                alt="Handyman Wannabe"
                className="h-16 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-12">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => handleMegaMenuEnter(item.label)}
                    onMouseLeave={handleMegaMenuLeave}
                    onClick={(e) => e.preventDefault()}
                  >
                    <div>
                      {item.label === "SERVICES" ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleServiceClick(e);
                          }}
                          className={`flex items-center text-base font-medium px-4 py-2 rounded-md transition-colors group-hover:text-secondary relative ${
                            isActive(item.href)
                              ? "text-secondary"
                              : isScrolled || shouldUseBlackText
                                ? "text-dark hover:bg-gray-50"
                                : "text-white hover:bg-white/10"
                          }`}
                          aria-expanded={megaMenuOpen ? "true" : "false"}
                          aria-haspopup="true"
                          data-menu-trigger="SERVICES"
                        >
                          {item.label}
                          <ChevronDown className="ml-1 w-4 h-4" />
                        </button>
                      ) : (
                        <Link
                          to={item.href || "#"}
                          onClick={(e) => {
                            if (!item.href) {
                              e.preventDefault();
                            }
                          }}
                          className={`flex items-center text-base font-medium px-4 py-2 rounded-md transition-colors group-hover:text-secondary relative ${
                            isActive(item.href)
                              ? "text-secondary"
                              : isScrolled || shouldUseBlackText
                                ? "text-dark hover:bg-gray-50"
                                : "text-white hover:bg-white/10"
                          }`}
                          aria-expanded={activeDropdown === item.label}
                          aria-haspopup={
                            item.dropdown || item.megaMenu ? "true" : "false"
                          }
                          onMouseEnter={() => handleDropdownEnter(item.label)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          {item.label}
                          {(item.dropdown || item.megaMenu) && (
                            <ChevronDown className="ml-1 w-4 h-4" />
                          )}
                        </Link>
                      )}
                    </div>

                    {item.megaMenu &&
                      megaMenuOpen &&
                      item.label === "SERVICES" && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-[600px] bg-white shadow-xl rounded-b-lg overflow-hidden transition-opacity duration-200 z-50 mega-menu-container">
                          <div className="grid grid-cols-2 gap-4 p-4">
                            {item.megaMenu.map((category, index) => (
                              <div key={index} className="grid gap-1">
                                {category.items.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={
                                      service.href ||
                                      getServiceUrl(service.name)
                                    }
                                    className={`px-2 py-1 text-sm hover:bg-gray-50 transition-colors rounded ${index === 0 ? "text-secondary hover:text-primary" : "text-[#91d30f] hover:text-orange-500"} flex items-center`}
                                  >
                                    <service.icon className="w-4 h-4 mr-2" />
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {item.dropdown && dropdownOpen === item.label && (
                      <div
                        className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-b-lg overflow-hidden transition-opacity duration-200 z-50 dropdown-menu"
                        role="menu"
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.dropdown.map((dropdownItem) =>
                          dropdownItem.external ? (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm text-dark hover:bg-gray-50 hover:text-secondary transition-colors dropdown-link"
                              target="_blank"
                              rel="noopener noreferrer"
                              role="menuitem"
                              onClick={(e) => {
                                if (dropdownItem.onClick) {
                                  e.preventDefault();
                                  dropdownItem.onClick();
                                }
                              }}
                            >
                              {dropdownItem.label}
                            </a>
                          ) : (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              className="block px-4 py-3 text-sm text-dark hover:bg-gray-50 hover:text-secondary transition-colors dropdown-link"
                              role="menuitem"
                            >
                              {dropdownItem.label}
                            </Link>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = "tel:+12676357958";
                  }}
                  onMouseEnter={(e) => e.stopPropagation()}
                  onMouseOver={(e) => e.stopPropagation()}
                  className="bg-primary text-white font-bold text-sm md:text-base py-1.5 md:py-2 px-3 md:px-4 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Call Us
                </button>
              </div>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${isScrolled || shouldUseBlackText ? "text-dark" : "text-white"} hover:text-secondary p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors`}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-8 w-8 text-primary" />
                ) : (
                  <Menu className="h-8 w-8 text-primary" />
                )}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="lg:hidden bg-white mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 list-none mobile-menu-content">
                {navItems.map((item) =>
                  item.label === "SERVICES" ? (
                    <button
                      key={item.label}
                      onClick={() => {
                        setShowMobileServices(true);
                        setIsOpen(false);
                      }}
                      className="block py-3 text-lg font-medium text-dark hover:text-primary w-full text-left"
                    >
                      {item.label}
                    </button>
                  ) : item.megaMenu || item.dropdown ? (
                    <div key={item.label}>
                      <button
                        onClick={() => toggleMobileSubMenu(item.label)}
                        className="w-full text-left flex justify-between items-center px-3 py-2 text-base font-medium text-dark hover:bg-gray-100 rounded-md"
                      >
                        {item.label}
                        {mobileSubMenuOpen === item.label ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                      {mobileSubMenuOpen === item.label && item.dropdown && (
                        <div className="space-y-2 pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-3 py-2 text-base font-medium text-dark hover:bg-gray-100 rounded-md"
                              onClick={() => {
                                setIsOpen(false);
                                setMobileSubMenuOpen(null);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href || "#"}
                      className="block py-3 text-lg font-medium text-dark hover:text-primary"
                      onClick={() => {
                        setIsOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.label}
                    </Link>
                  ),
                )}

                <div className="py-4 flex flex-col items-center mt-2"></div>
              </div>
            </div>
          )}
          <PhoneCallModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
