import { readFile, writeFile } from "fs/promises";

const createTxt = async () => {
    const dogs = ["Jolie", "Moana", "Maui"];
    const dogsTxt = dogs.join("\n");

    await writeFile("./src/fs-module/teste.txt", dogsTxt);
}

const readTxt = async () => {
    const fileContent = await readFile("./src/fs-module/teste.txt", { encoding: "utf8" });
    const list = fileContent.split("\n");
    console.log(list);
}

readTxt();