import { io } from 'socket.io-client';
import { roomIdStore } from './stores/room';

export const socket = io("http://localhost:4000");


socket.on("connect", () =>
{
    console.log("Successfully connected to socket");
});

socket.on("room-joined", (roomId) =>
{
    console.log("room-joined", roomId);
});

socket.on("room-created", (roomId) =>
{
    console.log("room-created", roomId);
    roomIdStore.set(roomId);
});

export function createRoom()
{
    socket.emit("create-room", null, (res: any) =>
    {
        console.log("create-room-res", res);
    });
}

export function updateRoom(payload: any)
{
    socket.emit("update-room", payload, (res: any) =>
    {
        console.log("create-room-res", res);
    });
}

export function sendMessage(content: string, id: string)
{
    socket.emit("test");
    // return new Promise(
    //     (
    //         resolve: (value: SendSuccess) => void,
    //         reject: (value: SendError) => void
    //     ) =>
    //     {
    //         socket.emit("message", content, id, (response: any) =>
    //         {
    //             const error = response.error;

    //             if (error)
    //             {
    //                 if (typeof error !== "string")
    //                 {
    //                     reject({ error: "Error sending message" });

    //                     return;
    //                 }

    //                 reject({ error });

    //                 return;
    //             }

    //             const message = response.message;

    //             if (!message || typeof message !== "string")
    //             {
    //                 reject({ error: "Unexpected result from server" });

    //                 return;
    //             }

    //             resolve({ message });
    //         });
    //     }
    // );
}