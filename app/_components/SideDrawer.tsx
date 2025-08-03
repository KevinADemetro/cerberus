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

interface SideDrawerContextType {
  openName: string;
  close: () => void;
  open: Dispatch<SetStateAction<string>>;
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
  openPosition: string;
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

const Window: FC<WindowProps> = ({ children, name, openPosition = "left" }) => {
  const context = useContext(SideDrawerContext);
  if (name !== context?.openName) return null;
  return (
    <div className="fixed top-0 left-0 w-[100%] h-full bg-backdrop backdrop-blur-[4px] z-[1000]">
      <div
        className={`
        ${
          openPosition === "left"
            ? "bg-amber-400 w-[70%] h-full fixed left-0 top-0"
            : ""
        }
        ${
          openPosition === "right"
            ? "bg-amber-400 w-[70%] h-full fixed right-0 top-0"
            : ""
        }
        ${
          openPosition === "top"
            ? "bg-amber-400 h-[50%] w-full fixed top-0 left-0"
            : ""
        }
        ${
          openPosition === "bottom"
            ? "bg-amber-400 h-[50%] w-full fixed bottom-0 left-0"
            : ""
        }
      `}
      >
        <button onClick={context?.close}>fechar</button>
        {children}
      </div>
    </div>
  );
};

SideDrawer.Open = Open;
SideDrawer.Window = Window;

export default SideDrawer;
