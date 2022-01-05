import ParentItem from "components/ParentItem";
import Sidebar from "components/Sidebar";
import { useState } from "react";
import "./style.css";

export default function ResponsiveMenu() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="responsive-menu">
      <span onClick={(e) => setOpen(!open)}>
        <ParentItem depth={0} name="Docs" formattedName="DOCS"></ParentItem>
      </span>
      <Sidebar responsive={open} />
    </div>
  );
}
