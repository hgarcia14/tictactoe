import Square from './Square';

interface IBoardProps {
    data: string[],
    onClick: (i: number) => void
}

const Board: React.FC<IBoardProps> = ({ data, onClick }) => {

    return (
        <div>
            <div className="board-row">
                <Square value={data[0]} onClick={() => onClick(0)} />
                <Square value={data[1]} onClick={() => onClick(1)} />
                <Square value={data[2]} onClick={() => onClick(2)} />
            </div>
            <div className="board-row">
                <Square value={data[3]} onClick={() => onClick(3)} />
                <Square value={data[4]} onClick={() => onClick(4)} />
                <Square value={data[5]} onClick={() => onClick(5)} />
            </div>
            <div className="board-row">
                <Square value={data[6]} onClick={() => onClick(6)} />
                <Square value={data[7]} onClick={() => onClick(7)} />
                <Square value={data[8]} onClick={() => onClick(8)} />
            </div>
        </div>
    );
}

export default Board;