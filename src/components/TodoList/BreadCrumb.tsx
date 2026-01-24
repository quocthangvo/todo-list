import { MdNavigateNext } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { appRouters } from "../../routers/Routers";

const BreadCrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  return (
    <div>
      <nav className="flex justify-end">
        <ul className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 "
            >
              <TiHome className="me-2" />
              Home
            </Link>
          </li>
          {paths.map((_, i) => {
            const url = "/" + paths.slice(0, i + 1).join("/");

            const match = appRouters.find((r) =>
              url.match(new RegExp("^" + r.path.replace(":id", "[^/]+") + "$"))
            );

            return (
              <li className="flex items-center">
                <MdNavigateNext />
                <span
                  key={url}
                  className="ms-1 text-sm font-medium text-gray-400"
                >
                  {i !== 0 && " / "}
                  {match?.breadcrumb || url}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumb;
