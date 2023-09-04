import { createContext, useContext, useEffect, useState } from "react";
import { Socket, connect } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

const SocketContext = createContext<
  [Socket | null, React.Dispatch<React.SetStateAction<Socket | null>> | null]
>([null, null]);

// type a = [Socket | null, React.Dispatch<React.SetStateAction<Socket | null>>];

export function SocketProvider({ children }: { children: React.ReactElement }) {
  const dispatch = useDispatch();
  const loginned = useSelector<RootState>((state) => state.auth.loginned);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (loginned) {
      setSocket(
        connect("http://localhost:4000", {
          withCredentials: true,
          reconnection: false,
        })
      );
    }
  }, [loginned]);

  useEffect(() => {
    if (!socket) return;
    socket.on("connect", () => {
      console.log("connected");
      console.log(socket.id);
    });

    socket.on("message", (data) => {
      console.log(data);
    });

    socket.on("disconnect", () => {
      console.log("disconnect");
    });

    return () => {};
  }, [dispatch, socket]);

  return (
    <SocketContext.Provider value={[socket, setSocket]}>
      {children}
    </SocketContext.Provider>
  );
}
export function useSocket() {
  return useContext(SocketContext);
}
