import  playlistCover  from '../../assets/img/cover/playlist.png';

type HeaderProps = {
    title: string;
    subtitle: string;
}

const PlaylistHeader = ({title, subtitle}: HeaderProps) => {
    return (
        <div className="header-container">
            <div className="header-backgroud"/>
            <div className="header-content">
                <img src={playlistCover} 
                      alt="Capa da playlist"
                      className="header-cover"/>
            <div className="info">
                <h3>{title}</h3>
                <h6>{subtitle}</h6>
            </div>
            </div>
        </div>
    );
};

export default PlaylistHeader;