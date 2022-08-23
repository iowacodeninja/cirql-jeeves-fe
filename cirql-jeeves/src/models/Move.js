import dragonflyImage from '../img/trapeze.jpeg'; 
import sailImage from '../img/sling.jpeg'; 
import splitSilksImage from '../img/silks.jpeg'; 
import personInTheMoonImage from '../img/lyra.jpeg'; 

function makeId(str){
  return str.toLowerCase().replace(/[^a-z0-9]+/gi, '_').replace(/_+/g, '_');
}

export function getAll(apparatusId, moveId) {
  if (apparatusId) {
    return getByApparatus(apparatusId);
  }
  const moves = [
    { 
      name: 'Dragonfly',
      apparatus: 'trapeze',
      aliases: ["Armpit Amazon"],
      instructions: "She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There'll be no one to stop us this time!",
      media: [
        { 
          type: 'image',
          src: dragonflyImage,
          credits: [
            { type: 'Aerialist', value: 'Krystal Berger'},
            { type: 'Photo', value: 'Danny Does Pix'},
            { type: 'Submitted by', value: 'Christa D'}
          ]
        }
      ]
    },
    { 
      name: 'Person in the Moon',
      apparatus: 'lyra',
      aliases: ["Man in the Moon"],
      media: [
        { 
          type: 'image',
          src: personInTheMoonImage,
          credits: [
            { type: 'Aerialist', value: 'Kristi Rogers'},
            { type: 'Photo', value: 'Danny Does Pix'},
            { type: 'Submitted by', value: 'Christa D'}
          ]
        }
      ]
    }, 
    { 
      name: 'Sail',
      apparatus: 'sling',
      aliases: ["Standing Sail"],
      instructions: "A tremor in the Force. The last time I felt it was in the presence of my old master. I have traced the Rebel spies to her. Now she is my only link to finding their secret base. Remember, a Jedi can feel the Force flowing through him.",
      media: [
        { 
          type: 'image',
          src: sailImage,
          credits: [
            { type: 'Aerialist', value: 'Carrie Herndon'},
            { type: 'Photo', value: 'Danny Does Pix'},
            { type: 'Submitted by', value: 'Christa D'}
          ]
        },
        { 
          type: 'image',
          src: splitSilksImage,
          credits: [
            { type: 'Aerialist', value: 'Rebecca Purnell'},
            { type: 'Photo', value: 'Danny Does Pix'},
            { type: 'Submitted by', value: 'Christa D'}
          ]
        },
        { 
          type: 'image',
          src: dragonflyImage,
          credits: [
            { type: 'Aerialist', value: 'Krystal Berger'},
            { type: 'Photo', value: 'Danny Does Pix'},
            { type: 'Submitted by', value: 'Christa D'}
          ]
        }
      ]
    },
    { 
      name: 'Double Footlock Split',
      apparatus: 'silks',
      aliases: [],
      media: [
        { 
          type: 'image',
          src: splitSilksImage,
          credits: [
            { type: 'Aerialist', value: 'Rebecca Purnell'},
            { type: 'Photo', value: 'Danny Does Pix'},
            { type: 'Submitted by', value: 'Christa D'}
          ]
        }
      ]
    }
  ];
  for (const move of moves) {
    move.id = makeId(`${move.apparatus}_${move.name}`)
  }
  return moves.filter(move => move.id !== moveId);
}

export function getByApparatus(apparatus) {
  return getAll().filter(move => move.apparatus === apparatus);
}

export function getDetail(id) {
  const matchingMoves = getAll().filter(move => move.id === id);
  return matchingMoves.length > 0 ? matchingMoves[0] : { error: "not found" };
}