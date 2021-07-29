import { useState } from 'react';
import Board from './Board';
import calculateWinner from '../helpers/getWinner';

interface IDataState {
    history?: any[];
    moveNumber: number;
    xIsNext: boolean;
}

const Game: React.FC = () => {

    const [data, setData] = useState<IDataState>({
        history: [{
            squares: Array(9).fill(null)
        }],
        moveNumber: 0,
        xIsNext: true
    });

    const handleClick = (i: number) => {
        const history = data.history ? data.history.slice(0, data.moveNumber + 1) : [];
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = data.xIsNext ? 'X' : 'O';

        setData({
            history: history.concat([{
                squares: squares,
            }]),
            moveNumber: history.length,
            xIsNext: !data.xIsNext,
        });
    }

    const handleStartAgainClick = () => {
        setData({
            history: [{
                squares: Array(9).fill(null)
            }],
            moveNumber: 0,
            xIsNext: true
        });
    }

    const jumpTo = ( move: number ) => {
        setData({
            history: history,
            moveNumber: move,
            xIsNext: (move % 2) === 0
        });
    }

    const history = data.history || [];
    console.log(history[data.moveNumber]);
    const current = history[data.moveNumber];
    const winner = calculateWinner(current.squares);
    let status;

    const moves = history.map(( step, index ) => {
        const desc = index ?
            `Go to move # ${index}` :
            `Start again`;
        return (
            <li key={index}>
                <button onClick={() => jumpTo(index)}>{desc}</button>
            </li>
        );
    });

    if (winner) {
        status = `Winner player is: ${winner}`;
    } else {
        status = `Next player: ${data.xIsNext ? 'X' : '0'}`
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board data={current.squares} onClick={(i) => handleClick(i)} />
            </div>
            <div className="game-info">
                <div className="status">
                    <p>{status}{winner ? <button onClick={handleStartAgainClick}>Start again</button> : ''}</p>
                </div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;