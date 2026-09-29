import * as requests from "./userRequests"
import * as hooks from "./userHooks"

export const userService = {

    ...requests,
    ...hooks
}