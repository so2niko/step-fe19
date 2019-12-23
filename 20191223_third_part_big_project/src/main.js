import { ControllerAuthorization } from "./authorization/ControllerAuthorization.js";
import { Publisher } from "./share/Publisher.js";
import { ControllerMenu } from "./menu/ControllerMenu.js";

const publisher = new Publisher();
const methods = publisher.getMethods();
const auth = new ControllerAuthorization(methods);
const menu = new ControllerMenu(methods);