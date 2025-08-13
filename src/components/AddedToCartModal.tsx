"use client";
import { useEffect } from "react";
import SideDrawer, { useSideDrawer } from "./SideDrawer";

function AddedToCartModal({ onClose }: { onClose: () => void }) {
  return (
    <SideDrawer onClose={onClose}>
      <AddedToCartModalContent />
    </SideDrawer>
  );
}

function AddedToCartModalContent() {
  const { open } = useSideDrawer();

  useEffect(() => {
    open("addedToCart");
  }, [open]);

  return (
    <SideDrawer.Window name="addedToCart" openPosition="top">
      <div>
        <h2>Adicionado ao carrinho</h2>
      </div>
    </SideDrawer.Window>
  );
}

export default AddedToCartModal;
