import {noContent, ok} from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = {
        id: 10,
        name: "CR7",
    };
    let response = null;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}