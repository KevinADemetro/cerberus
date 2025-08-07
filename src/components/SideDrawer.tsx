"use client";
import {
  cloneElement,
  createContext,
  ReactElement,
  useContext,
  useState,
  FC,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import IconButton from "./IconButton";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface SideDrawerContextType {
  openName: string;
  close: () => void;
  open: Dispatch<SetStateAction<string>>;
}

const SideDrawerContext = createContext<SideDrawerContextType | undefined>(undefined);

interface SideDrawerProps {
  children: ReactNode;
}

interface OpenProps {
  children: ReactElement<{ onClick?: () => void }>;
  name: string;
}

interface WindowProps {
  children: ReactElement<{ onCloseModal?: () => void }>;
  name: string;
  openPosition: string;
}

interface SideDrawerComponent extends FC<SideDrawerProps> {
  Open: FC<OpenProps>;
  Window: FC<WindowProps>;
  Close: FC;
}

const SideDrawer: SideDrawerComponent = ({ children }: SideDrawerProps) => {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <SideDrawerContext.Provider value={{ openName, close, open }}>
      {children}
    </SideDrawerContext.Provider>
  );
};

const Open: FC<OpenProps> = ({ children, name }) => {
  const context = useContext(SideDrawerContext);
  return cloneElement(children, { onClick: () => context?.open(name) });
};

const Window: FC<WindowProps> = ({ children, name, openPosition = "left" }) => {
  const context = useContext(SideDrawerContext);
  const ref = useOutsideClick(context?.close);

  if (name !== context?.openName) return null;
  return (
    <div className="fixed top-0 left-0 w-[100%] h-full bg-backdrop z-[1000]">
      <div
        ref={ref}
        className={`
        bg-background px-5 py-2
        ${openPosition === "left" ? "w-[80%] h-full fixed left-0 top-0" : ""}
        ${openPosition === "right" ? "w-[80%] h-full fixed right-0 top-0" : ""}
        ${openPosition === "top" ? "h-[50%] w-full fixed top-0 left-0" : ""}
        ${openPosition === "bottom" ? "h-[50%] w-full fixed bottom-0 left-0" : ""}
      `}
      >
        {children}
      </div>
    </div>
  );
};

const Close: FC = () => {
  const context = useContext(SideDrawerContext);

  return (
    <IconButton onClick={() => context?.close()}>
      <XMarkIcon className="size-4" />
    </IconButton>
  );
};

SideDrawer.Open = Open;
SideDrawer.Window = Window;
SideDrawer.Close = Close;

export default SideDrawer;
