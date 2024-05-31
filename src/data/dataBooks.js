const dataBooks = [

    {
      id: 1, 
      price: 15,  
      img: 'afterTheEnd', 
      name: '"After the end"', 
      author: 'By Clare Mackintosh', 
      genre: 'DRAMA'  
  },
  
  {
    id: 2, 
    price: 15,  
    img: 'thenSheWasGone', 
    name: '"Then she was gone"',  
    author: 'By Lisa Jewell', 
    genre: 'DRAMA'  
  },
  
  { 
    id: 3,  
    price: 15,  
    img: 'onceUponExpat', 
    name: '"Once upon an expat"',
    author: 'By Lisa Webb',  
    genre: 'DRAMA'    
  },
  
  { 
      id: 4,  
      price: 15,  
      img: 'moreThan',
      name: '"More than youll ever know"',
      author: 'By Katie Guttierrez', 
      genre: 'DRAMA'  
  },
  
  { 
    id: 5, 
    price: 15, 
    img: 'silentWife',
    name: '"The silent wife"',
    author: 'By A.S.A. Harrison', 
    genre: 'DRAMA'  
  },
  
  { 
    id: 6,  
    price: 20, 
    img: 'calculatingStars',
    name: '"The calculating stars"',
    author: 'By M.R. Kowal', 
    genre: 'FANTASY' 
  },
  
  { 
    id: 7,  
    price: 20, 
    img: 'twilight',
    name: '"Twilight"',
    author: 'By Stephenie Meyer', 
    genre:  'FANTASY' 
  },
  
  
  { 
    id: 8,  
    price: 20, 
    img: 'eyeOfWorld',
    name: '"The eye of the world"',
    author: 'By Robert Jordan', 
    genre:  'FANTASY' 
  },
  
  
  { 
    id: 9,  
    price: 20, 
    img: 'daughterOfNoWorld',
    name: '"Daughter of no worlds"',
    author: 'By Carrisa Broadbent', 
    genre:  'FANTASY' 
  },
  
  { 
    id: 10,  
    price: 20, 
    img: 'ruinousFate',
    name: '"A ruinous fate"',
    author: 'By Kalie Smith', 
    genre:  'FANTASY' 
  },
  
  
  {
    id: 11,
    price: 25,
    img: 'hungerGames',
    name: '"The hunger games"',
    author: 'By Suzanne Collins', 
    genre:  'FICTION'
  },

  {
    id: 12,
    price: 25,
    img: 'hobbit',
    name: '"The hobbit"',
    author: 'By J.R.R. Tolkien', 
    genre:  'FICTION'
  },

  {
    id: 13,
    price: 25,
    img: 'thirst',
    name: '"The thirst"',
    author: 'By Jo Nesbo', 
    genre:  'FICTION'
  },

  {
    id: 14,
    price: 25,
    img: 'martian',
    name: '"The martian"',
    author: 'By Andy Weir', 
    genre:  'FICTION'
  },

  {
    id: 15,
    price: 25,
    img: 'homecoming',
    name: '"Homecoming"',
    author: 'By Kate Morton', 
    genre:  'FICTION'
  },
  
  {
    id: 16,
    price: 10,
    img: 'spanishDaughter',
    name: '"The spanish daughter"',
    author: 'By Lorena Hughes', 
    genre:  'HISTORICAL FICTION'
  },

  {
    id: 17,
    price: 10,
    img: 'diamondEye',
    name: '"The diamond eye"',
    author: 'By Kate Quinn', 
    genre:  'HISTORICAL FICTION'
  },

  {
    id: 18,
    price: 10,
    img: 'alhambra',
    name: '"The Alhambra"',
    author: 'By Robert Irwin ', 
    genre:  'HISTORICAL FICTION'
  },

  {
    id: 19,
    price: 10,
    img: 'orphansWar',
    name: '"An orphans war"',
    author: 'By Molly Green', 
    genre:  'HISTORICAL FICTION'
  },

  {
    id: 20,
    price: 10,
    img: 'witch',
    name: '"A witch in time"',
    author: 'By Constance Sayers', 
    genre:  'HISTORICAL FICTION'
  },

  {
    id: 21,
    price: 30,
    img: 'codeDaVinci',
    name: '"The Da Vinci code"',
    author: 'By Dan Brown', 
    genre:  'MYSTERY'
  },

  {
    id: 22,
    price: 30,
    img: 'hellHouse',
    name: '"Hell house"',
    author: 'By Richard Matheson', 
    genre:  'MYSTERY'
  },

  {
    id: 23,
    price: 30,
    img: 'troubledBlood',
    name: '"Troubled blood"',
    author: 'By Robert Gailbraith', 
    genre:  'MYSTERY'
  },

  {
    id: 24,
    price: 30,
    img: 'silentPatient',
    name: '"The silent patient"',
    author: 'By Alex Michaelides', 
    genre:  'MYSTERY'
  },

  {
    id: 25,
    price: 30,
    img: 'maid',
    name: '"The maid"',
    author: 'By Nita Prose', 
    genre:  'MYSTERY'
  },

  {
    id: 26,
    price: 17,
    img: 'houseOfSpirits',
    name: '"The house of the spirits"',
    author: 'By Isabel Allende', 
    genre:  'ROMANCE'
  },

  {
    id: 27,
    price: 17,
    img: 'bungalow',
    name: '"The bungalow"',
    author: 'By Sara Jio', 
    genre:  'ROMANCE'
  },

  {
    id: 28,
    price: 17,
    img: 'cleopatraPerez',
    name: '"Cleopatra Perez"',
    author: 'By Jose Ortega Munilla', 
    genre:  'ROMANCE'
  },

  {
    id: 29,
    price: 17,
    img: 'thrilogy',
    name: '"The thrilogy"',
    author: 'By Fredrik Backman', 
    genre:  'ROMANCE'
  },

  {
    id: 30,
    price: 17,
    img: 'nativeStone',
    name: '"Native stone"',
    author: 'By Edwin Gilbert', 
    genre:  'ROMANCE'
  },

  {
    id: 31,
    price: 12,
    img: 'talesOfThames',
    name: '"The tales of The Thames"',
    author: 'By Max Pemberton', 
    genre:  'ADVENTURE'
  },

  {
    id: 32,
    price: 12,
    img: 'lightningThief',
    name: '"The lightning thief"',
    author: 'By Rick Riordan', 
    genre:  'ADVENTURE'
  },

  {
    id: 33,
    price: 12,
    img: 'lifeOfPi',
    name: '"Life of Pi"',
    author: 'By Yann Martel', 
    genre:  'ADVENTURE'
  },

  {
    id: 34,
    price: 12,
    img: 'lostRainforest',
    name: '"The lost rainforest"',
    author: 'By Eliot Schrefer', 
    genre:  'ADVENTURE'
  },

  {
    id: 35,
    price: 12,
    img: 'greatAlone',
    name: '"The great alone"',
    author: 'By Kristin Hannah', 
    genre:  'ADVENTURE'
  },

  {
    id: 36,
    price: 23,
    img: 'MissPeregrine',
    name: '"Miss Peregrine"',
    author: 'By Ransom Riggs', 
    genre:  'HORROR'
  },

  {
    id: 37,
    price: 23,
    img: 'carrie',
    name: '"Carrie"',
    author: 'By Stephen King', 
    genre:  'HORROR'
  },

  {
    id: 38,
    price: 23,
    img: 'deepStorm',
    name: '"Deep storm"',
    author: 'By Lincoln Child', 
    genre:  'HORROR'
  },

  {
    id: 39,
    price: 23,
    img: 'cabal',
    name: '"Cabal"',
    author: 'By Clive Barker', 
    genre:  'HORROR'
  },

  {
    id: 40,
    price: 23,
    img: 'lionsDen',
    name: '"The lions Den"',
    author: 'By D.N. Simmons', 
    genre:  'HORROR'
  }
  ] 
  
  export default dataBooks;