import React from 'react'
//Import unique identifier generator
import {v4 as uuidv4} from 'uuid';

const allSongs = () => {
    return(
        [
            {
                id: uuidv4(),
                name: 'Skates',
                artist: 'SwuM',
                albumCover: 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=15225',
                colors: ['#293433', '#D1AA83'],
                active: true
            },
            {
                id: uuidv4(),
                name: 'Lonely Waves',
                artist: 'C Y G N',
                albumCover: 'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=14980',
                colors: ['#DC77F1', '#97C9F2'],
                active: false
            },
            {
                id: uuidv4(),
                name: 'Kinsfolk',
                artist: 'Aarigod',
                albumCover: 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=12996',
                colors: ['#99B761', '#55432B'],
                active: false
            },
            {
                id: uuidv4(),
                name: 'Skates',
                artist: 'SwuM',
                albumCover: 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=15225',
                colors: ['#293433', '#D1AA83'],
                active: false
            },
            {
                id: uuidv4(),
                name: 'Lonely Waves',
                artist: 'C Y G N',
                albumCover: 'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=14980',
                colors: ['#DC77F1', '#97C9F2'],
                active: false
            },
            {
                id: uuidv4(),
                name: 'Kinsfolk',
                artist: 'Aarigod',
                albumCover: 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=12996',
                colors: ['#99B761', '#55432B'],
                active: false
            },
        ]
    );
}

export default allSongs;
