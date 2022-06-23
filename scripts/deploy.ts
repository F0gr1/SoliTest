import { ethers } from "hardhat";

async function main() {
  // コントラクト`TodoList`をデプロイ
  const TodoList = await ethers.getContractFactory("TodoList");
  const todoList = await TodoList.deploy();
  // デプロイ完了まで待機
  await todoList.deployed();

  // デプロイされたアドレスを出力
  // -> フロントエンドで接続するための情報として必要
  console.log("todoList deployed to:", todoList.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});