//socket은 최상위 컴포넌트에서 통신하는걸 권장함
import { io } from "socket.io-client";

//백엔드 소켓 서버주소
const URL = "http://localhost:3005";

export const socket = io(URL, { autoConnect: false });
