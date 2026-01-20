import { ToggleSideBar, TogglePickupDelivery } from "./header.js";
import { ScrollBtnHandle} from "./restService.mjs";


async function init() {
  ToggleSideBar();
  TogglePickupDelivery();
  ScrollBtnHandle();
}

init();