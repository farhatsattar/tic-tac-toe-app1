"use client";
import Image from "next/image";
import Board from "./TicTacToe/board";
import "./TicTacToe/tictactoe.css";

export default function Home() {
  return (
    <div className="grid justify-center border-t-gray-950 p-5 bg-fuchsia-800 min-h-screen ">


      <Board/>
      
      
      </div>
  );
};