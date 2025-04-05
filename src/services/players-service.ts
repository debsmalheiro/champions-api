import {noContent, ok} from "../utils/http-helper";
import * as PlayerRepository from "../repositories/players-repository";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}