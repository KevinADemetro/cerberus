"use client";
import SideDrawer from "@/app/_components/SideDrawer";

function Teste() {
  return (
    <div>
      <SideDrawer>
        <SideDrawer.Open name="teste">
          <button>teste</button>
        </SideDrawer.Open>
        <SideDrawer.Window name="teste">
          <div>aaaaaaaaaaa</div>
        </SideDrawer.Window>
      </SideDrawer>
    </div>
  );
}

export default Teste;
