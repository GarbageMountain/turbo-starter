import React from "react";
import { Layout } from "../components/Layout.component";

import {
  DisplayPrimary,
  TextPrimary,
} from "../components/Typography.component";
import { useTheme } from "../theme";

type RowType = {
  idx: number;
  player?: string;
};

export const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const gameState: RowType[] = [
    { idx: 0, player: undefined },
    { idx: 1, player: undefined },
    { idx: 2, player: undefined },
    { idx: 3, player: undefined },
    { idx: 4, player: undefined },
    { idx: 5, player: undefined },
    { idx: 6, player: undefined },
    { idx: 7, player: undefined },
    { idx: 8, player: undefined },
  ];

  const win = [
    // Across
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Cross
    [0, 4, 8],
    [2, 4, 6],
  ];

  const player = "X";
  const state = {
    gameStarted: false,
    board: gameState,
    player,
    winner: undefined as string | undefined | false,
  };

  type GameState = typeof state;
  const [game, setGame] = React.useState(state);

  const handlePlayerPress = (idx: number) => {
    const copyGame = { ...game };

    if (!game.board[idx].player) {
      copyGame.board[idx].player = copyGame.player;

      copyGame["player"] = "X";

      if (handleCheckGame(copyGame.board)) {
        setGame({
          ...copyGame,
          gameStarted: false,
          winner: handleCheckGame(copyGame.board),
        });
        return;
      }

      setGame(copyGame);
      setTimeout(() => {
        handleCPUPress(copyGame);
      }, 200);

      if (handleCheckGame(copyGame.board)) {
        setGame({
          ...copyGame,
          winner: handleCheckGame(copyGame.board),
          gameStarted: false,
        });
        return;
      }
    }
  };

  const handleCheckGame = (checkGame: RowType[]) => {
    for (let i = 0; i < win.length - 1; i++) {
      let [first, second, third] = win[i];

      if (
        checkGame[first].player === game.player &&
        checkGame[second].player === game.player &&
        checkGame[third].player === game.player
      ) {
        return `${game.player === "X" ? "You" : "CPU"} won!`;
      }
    }

    let isSpaceOpen = checkGame.some((tile) => !tile.player);

    if (!isSpaceOpen) {
      return "Draw";
    }

    return false;
  };

  const handleCPUPress = (game: GameState) => {
    let copyGame = { ...game };
    let moved = false;

    while (!moved) {
      const move = Math.floor(Math.random() * 9);
      if (!copyGame.board[move].player) {
        copyGame.board[move].player = "O";
        moved = true;
        setGame({ ...copyGame });
      }
    }
  };

  return (
    <Layout.ScreenContainer bg="white" grow>
      <Layout.Column>
        <Layout.Row py justify align="flex-end">
          <DisplayPrimary color="grey" size="xl-28">
            Tick Tac Toe!
          </DisplayPrimary>
        </Layout.Row>

        <Layout.Row center style={{ flexWrap: "wrap", minWidth: 300 }}>
          {/* TODO: fix border outline issue */}
          {game.board.map((tile) => {
            return (
              <Layout.PressableColumn
                key={tile.idx}
                onPress={() => {
                  game.gameStarted ? handlePlayerPress(tile.idx) : undefined;
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderColor: "black",
                  borderWidth: 1,
                }}
                center
                px
                py
              >
                <TextPrimary weight="bold" size="xxl-48">
                  {tile.player ?? ""}
                </TextPrimary>
              </Layout.PressableColumn>
            );
          })}
        </Layout.Row>
      </Layout.Column>
      <Layout.Column py align>
        {/* Come back an refactor if you have a minute */}
        {game.gameStarted && !game.winner ? (
          <TextPrimary>
            {game.player === "X" ? "It's your Turn" : "It's CPU Turn"}
          </TextPrimary>
        ) : game.winner ? (
          <TextPrimary>{game.winner}</TextPrimary>
        ) : (
          <TextPrimary>Welcome!</TextPrimary>
        )}
      </Layout.Column>
      <Layout.Column>
        <Layout.PressableColumn
          style={{
            borderRadius: theme.sizes["s-10"],
            alignSelf: "center",
          }}
          py
          px
          center
          bg="buttonBlue"
          onPress={() => {
            setGame({ ...game, gameStarted: true });
          }}
        >
          <Layout.PressableColumn
            style={{
              borderRadius: theme.sizes["s-10"],
            }}
            px
            center
            bg="buttonBlue"
            onPress={() => {
              if (!game.winner) {
                {
                  /* Come back an refactor if you have a minute */
                }
                game.gameStarted
                  ? setGame({ ...state, gameStarted: false })
                  : setGame({ ...game, gameStarted: true });
              } else {
                setGame({ ...state, gameStarted: false });
              }
            }}
          >
            <TextPrimary weight="bold" color="white">
              {!game.winner
                ? game.gameStarted
                  ? "Restart"
                  : "Start Game"
                : "Start Game"}
            </TextPrimary>
          </Layout.PressableColumn>
        </Layout.PressableColumn>
      </Layout.Column>
    </Layout.ScreenContainer>
  );
};
