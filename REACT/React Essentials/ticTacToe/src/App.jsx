import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

// Oyuncuların isimlerine bu yapıyla ulaşılıyor. Bu obje ise oyuncunun başlangıç değeri için kullanılacak.
const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};
// Oyunun başlangıcında her kare boş
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
// Aktif oyuncuyu belirleme. X ve O cinsinden
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X"; // Başlangıçta aktif oyuncu X olsun
  //Burada koşula göre aktif oyuncu değişecek
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer; //aktif oyuncu döner (X veya O)
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray])]; // Burada kopyasını almazsak oyunun tekrar başlatılmasında değiştirilmiş dizi bizi karşılar. Oyunu tekrar başlatınca boş karelerin oluşması için bu işlem yapılmalı.

  //gameTurns deki objeler kullanılarak player x mi o mu bulunur, tıklanan karenin indeksine ulaşılır.
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    // gameBoard taki bu indekslere sahip karenin değeri tıklayan oyuncunun sembolü olur.
    gameBoard[row][col] = player; //burdaki işlemde orijinal initialGameBoard dizisi de hafızada değiştiği için spread ile yukarda kopyasını aldık
  }

  return gameBoard; //Karelerin yeni durumu döndürülür
}

//Kazananı belirlemek için her tur oyun tahtasının durumuna ve son oyuncuya göre kontrol yapılır
function deriveWinner(gameBoard, players) {
  let winner;

  //datalardaki kazanma kombinasyonları teker teker dolaşılır
  for (const combination of WINNING_COMBINATIONS) {
    // Bu dizi içindeki tüm diziler teker teker dolaşılır.
    //Dizinin(combination) içindeki objelerin birincisindeki, ikincisindeki ve üçüncüsündeki satır ve sütünlara bakılır
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    //Eğer kazandıran kombinasyonun hepsi aynı sembolle doluysa
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol]; //kazanan o sembol key inin value sü olan oyuncu ismi olur.
    }
  }
  return winner; // kazanan oyuncu döner
}

function App() {
  const [players, setPlayers] = useState(PLAYERS); //
  const [gameTurns, setGameTurns] = useState([]); //gameTurns, Oyunun her turundan sonra o anki oyuncuyu, o tur tıklanan karenin satır ve sütun indekslerini bir dizi içinde, objeler halinde saklar.

  const activePlayer = deriveActivePlayer(gameTurns); //Aktif oyuncuyu belirleme
  const gameBoard = deriveGameBoard(gameTurns); // oyun tahtasının son hali
  const winner = deriveWinner(gameBoard, players); //Kazanan oyuncu belirlendi
  const hasDraw = gameTurns.length === 9 && !winner; //Tüm kareler doluysa ve kazanan yoksa berabere

  // Kareye tıklandıktan sonra, GameBoard componentinden index değerlerini alır ve tıklanan kareye göre turun özelliklerine göre oyunun tüm turlarının tutulduğu dizi günceller
  function handleSelectSquare(rowIndex, colIndex) {
    //gameTurn ün eski değerini baz alarak yeni değer ayarlaması yapılmalı.
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns); //Son tıklamaya göre tıklayan oyuncu bulunur
      //Her bir yeni tıklama aşağıdaki formatta dizinin ilk elemanı olacak şekilde diğer elemanlarla birlikte updatedTurns te depolanır
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns; //gameTurns ün yeni değeri atanır
    });
  }

  //Rematch butonuna basınca turların tutulduğu objelerin olduğu dizi sıfırlanır. Tüm yapı bu turlara göre inşa edildiği için bu diziyi sıfırlamak oyunu ilk haline getirecektir.
  function handleRestart() {
    setGameTurns([]);
  }

  //Player komponentinden aldığı argümanlarla son oyuncunun sembolünü ve adını alıp players ı günceller
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName, //Nested objedeki key e ulaşmak için köşeli parantez kullanılır.
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
