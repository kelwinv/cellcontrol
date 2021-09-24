import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { JoinedRoom } from "./pages/JoinedRoom";
import { RoomHost } from "./pages/RoomHost";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={JoinedRoom} path="/JoinedRoom/:room" />
        <Route component={RoomHost} path="/RoomHost/:room" />
      </Switch>
    </BrowserRouter>
  );
}
