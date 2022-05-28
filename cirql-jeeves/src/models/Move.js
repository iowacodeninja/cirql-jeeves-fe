import dragonflyImage from '../img/trapeze.jpeg'; 
import sailImage from '../img/sling.jpeg'; 

const Dragonfly_Trapeze = { 
  name: 'Dragonfly',
  apparatus: 'Trapeze',
  id: 'trapeze_dragonfly',
  mediaLocation: [dragonflyImage]
};
const Sail_Sling = { 
  name: 'Sail',
  apparatus: 'Sling',
  id: 'sling_sail',
  mediaLocation: [sailImage]
};

export function getAll() {
  return [
    Dragonfly_Trapeze,
    Sail_Sling
  ];
}

export function getDetail(id) {
  switch (id) {
    case 'dragonfly_trapeze':
      return Dragonfly_Trapeze;
    case 'sail_sling':
    default:
      return Sail_Sling;
  }
}