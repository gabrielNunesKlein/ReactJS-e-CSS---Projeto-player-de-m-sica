import { headerInfo } from "../services/api";
import PlaylistHeader from "./components/PlaylistHeader"

const Player = () => {
    return (
        <div className="player-container">
            <PlaylistHeader {...headerInfo} />
        </div>
    );
};

export default Player;