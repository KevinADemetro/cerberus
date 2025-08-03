"use client";
import SideDrawer from "@/app/_components/SideDrawer";

function Teste() {
  return (
    <SideDrawer>
      <SideDrawer.Open name="teste">
        <button>teste</button>
      </SideDrawer.Open>
      <SideDrawer.Window name="teste" openPosition="right">
        <div>aaaaaaaaaaa</div>
      </SideDrawer.Window>
    </SideDrawer>
  );
}

export default Teste;
