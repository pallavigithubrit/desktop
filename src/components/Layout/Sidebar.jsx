import { Home, FolderOpen, RotateCcw, Tags } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    path: "/",
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderOpen,
    path: "/projects",
  },
  {
    id: "templates",
    label: "Templates",
    icon: RotateCcw,
    path: "/templates",
  },
  {
    id: "brand-kits",
    label: "Brand Kits",
    icon: Tags,
    path: "/brand-kits",
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-[69px] w-[302px] h-[calc(100vh-69px)] bg-gray-50 px-6 py-6 flex flex-col">
      <nav className="flex flex-col gap-1.5">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-colors ${
                isActive
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xl font-normal font-helvetica">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
