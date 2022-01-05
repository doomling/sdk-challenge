import ParentItem from "components/ParentItem";
import Sidebar from "components/Sidebar";
import { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router";

export default function ResponsiveMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div className="responsive-menu">
      <span onClick={() => setOpen((prevState) => !prevState)}>
        <ParentItem depth={0} name="Docs" formattedName="DOCS"></ParentItem>
      </span>
      <Sidebar responsive={open} />
    </div>
  );
}
