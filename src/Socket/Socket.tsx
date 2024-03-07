// "use client";

// import { getUserInfo } from "@/service/auth.service";
// import React, { useEffect, useState } from "react";
// import { io, Socket } from "socket.io-client";

// interface DefaultEventsMap {
//   getOnlineUsers: (users: any) => void;
//   new_message: (message: any) => void;
// }
// const Socket = () => {
//   const [onlineUsers, setOnlineUsers] = useState(null);
//   const [socket, setSocket] = useState<Socket<DefaultEventsMap> | null>(null);
//   const userInfo = getUserInfo();

//   useEffect(() => {
//     const socket = io("http://localhost:5000", {
//       query: {
//         userId: userInfo?.userId,
//       },
//     });

//     setSocket(socket);

//     socket.on("getOnlineUsers", (users: any) => {
//       setOnlineUsers(users);
//     });

//     // Cleanup the socket connection on component unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, [socket, userInfo?.userId]);

//   return { socket, onlineUsers };
// };

// export default Socket;
