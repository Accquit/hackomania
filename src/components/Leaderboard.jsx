
import React from 'react';
import { participants } from '../data';

const Leaderboard = ({ user }) => {
    return (
        <div className="leaderboard-container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>OFFICIAL STANDINGS</h2>

            <div className="glass-panel">
                <div className="leaderboard-header">
                    <span>Rank</span>
                    <span>Participant</span>
                    <span style={{ textAlign: 'right' }}>Score</span>
                </div>

                <div className="leaderboard-body">
                    {participants.map((player) => {
                        const isTop3 = player.rank <= 3;
                        // Highlight Rank 34 (Aryan Jangir) only if user is logged in
                        const isHighlight = user && player.rank === 34;

                        let rowClass = "leaderboard-row";
                        if (isTop3) rowClass += ` rank-${player.rank}`;
                        if (isHighlight) rowClass += " highlight-row";

                        return (
                            <div key={player.rank} className={rowClass}>
                                <span className="rank">#{player.rank}</span>
                                <span className="name">
                                    {player.name}
                                    {isHighlight && <span style={{ marginLeft: '10px', fontSize: '0.8em', color: '#f0abfc' }}>★</span>}
                                    {isTop3 && <span style={{ marginLeft: '10px' }}>🏆</span>}
                                </span>
                                <span className="score">{player.score}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
