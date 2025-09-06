"use client";
import { SideDrawer } from "@/src/components/";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export function Filters() {
  return (
    <SideDrawer>
      <SideDrawer.Open name="filtros">
        <AdjustmentsHorizontalIcon className="size-6" />
      </SideDrawer.Open>
      <SideDrawer.Window name="filtros" openPosition="left">
        <div>
          <div className="flex justify-between">
            <h2>Filtros</h2>
            <SideDrawer.Close />
          </div>
          <div>Lista de filtros</div>
        </div>
      </SideDrawer.Window>
    </SideDrawer>
  );
}
