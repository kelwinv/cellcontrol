import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { MobileRoom } from "./pages/MobileRoom";
import { RoomHost } from "./pages/RoomHost";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={MobileRoom} path="/MobileRoom/:room" />
        <Route component={RoomHost} path="/RoomHost/:room" />
      </Switch>
    </BrowserRouter>
  );
}
