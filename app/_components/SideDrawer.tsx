"use client";
import {
  cloneElement,
  createContext,
  ReactElement,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";

interface SideDrawerContextType {
  openName: string;
  close: () => void;
  open: (name: string) => void;
}

const SideDrawerContext = createContext<SideDrawerContextType | undefined>(
  undefined
);

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
}

interface SideDrawerComponent extends FC<SideDrawerProps> {
  Open: FC<OpenProps>;
  Window: FC<WindowProps>;
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

const Window: FC<WindowProps> = ({ children, name }) => {
  const context = useContext(SideDrawerContext);
  if (name !== context?.openName) return null;
  return <div>{children}</div>;
};

SideDrawer.Open = Open;
SideDrawer.Window = Window;

export default SideDrawer;
