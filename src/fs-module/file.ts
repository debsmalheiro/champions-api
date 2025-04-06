import { readFile, unlink, writeFile } from "fs/promises";

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

const updateTxt = async () => {
    const fileName = "./src/fs-module/teste.txt"
    const fileContent = await readFile(fileName, { encoding: "utf8" });

    const list = fileContent.split("\n");
    list.push("Dory");

    const listTxt = list.join("\n");

    await writeFile(fileName, listTxt);
}

const deleteTxt = async () => {
    const fileName = "./src/fs-module/teste.txt"
    await unlink(fileName);
}

deleteTxt();
