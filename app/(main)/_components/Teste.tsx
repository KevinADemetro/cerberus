"use client";
import SideDrawer from "@/app/_components/SideDrawer";

function Teste() {
  return (
    <SideDrawer>
      <SideDrawer.Open name="teste">
        <button>teste</button>
      </SideDrawer.Open>
      <SideDrawer.Window name="teste" openPosition="right">
        <div>
          <div className="flex justify-between">
            <h2>Filtros</h2>
            <SideDrawer.Close />
          </div>
          <div>aaaaaaaaaaa</div>
        </div>
      </SideDrawer.Window>
    </SideDrawer>
  );
}

export default Teste;
