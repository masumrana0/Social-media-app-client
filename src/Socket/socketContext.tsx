"use client";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { Socket } from "socket.io-client";
import io from "socket.io-client";
import { getUserInfo } from "@/service/auth.service";

interface SocketContextProps {
  socket: Socket | null;
  onlineUsers: string[];
}

const SocketContext = createContext<SocketContextProps>({
  socket: null,
  onlineUsers: [],
});

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const userInfo = getUserInfo();

  useEffect(() => {
    const connectSocket = () => {
      if (userInfo) {
        const newSocket: Socket = io("http://localhost:5000", {
          query: {
            userId: userInfo.userId,
          },
        });

        setSocket(newSocket);

        // Listen to events
        newSocket.on("getOnlineUsers", (users) => {
          setOnlineUsers(users);
        });

        // Handle disconnection
        return () => {
          newSocket.close();
          setSocket(null);
        };
      }
    };

    connectSocket();
  }, []);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
