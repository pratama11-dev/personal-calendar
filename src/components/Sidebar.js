import React from "react";
import CreateEventButton from "./CreateEventButton";
// import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <aside className="w-64 p-5 border" id="aside">
      <CreateEventButton />
      {/* <SmallCalendar /> */}
      <Labels />
    </aside>
  );
}
