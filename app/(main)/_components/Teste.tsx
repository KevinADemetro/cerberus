"use client";
import SideDrawer from "@/app/_components/SideDrawer";

function Teste() {
  return (
    <div>
      <SideDrawer>
        <SideDrawer.Open name="teste">
          <button>teste</button>
        </SideDrawer.Open>
      </SideDrawer>
    </div>
  );
}

export default Teste;
