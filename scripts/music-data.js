// Arctic Monkeys Music Data
const musicData = {
  albums: [
    {
      id: 1,
      title: "Whatever People Say I Am, That's What I'm Not",
      year: 2006,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Whatever_People_Say_I_Am%2C_That%27s_What_I%27m_Not_%282006_Arctic_Monkeys_album%29.jpg/250px-Whatever_People_Say_I_Am%2C_That%27s_What_I%27m_Not_%282006_Arctic_Monkeys_album%29.jpg",
      description:
        "The debut album that launched Arctic Monkeys into stardom with its raw energy and witty lyrics.",
      tracks: [
        "The View from the Afternoon",
        "I Bet You Look Good on the Dancefloor",
        "Fake Tales of San Francisco",
        "Dancing Shoes",
        "You Probably Couldn't See for the Lights but You Were Looking Straight at Me",
        "Still Take You Home",
        "Riot Van",
        "Red Light Indicates Doors Are Secured",
        "Mardy Bum",
        "Perhaps Vampires Is a Bit Strong But...",
        "When the Sun Goes Down",
        "From the Ritz to the Rubble",
        "A Certain Romance",
      ],
    },
    {
      id: 2,
      title: "Favourite Worst Nightmare",
      year: 2007,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Favourite_Worst_Nightmare.jpg/250px-Favourite_Worst_Nightmare.jpg",
      description:
        "A darker, more mature follow-up that solidified their place in indie rock history.",
      tracks: [
        "Brianstorm",
        "Teddy Picker",
        "D is for Dangerous",
        "Balaclava",
        "Fluorescent Adolescent",
        "Only Ones Who Know",
        "Do Me a Favour",
        "This House Is a Circus",
        "If You Were There, Beware",
        "The Bad Thing",
        "Old Yellow Bricks",
        "505",
      ],
    },
    {
      id: 3,
      title: "Humbug",
      year: 2009,
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Panorama_of_Humbug._No._1_LCCN2004665373.jpg/250px-Panorama_of_Humbug._No._1_LCCN2004665373.jpg",
      description:
        "A psychedelic departure featuring Josh Homme's production and desert rock influences.",
      tracks: [
        "My Propeller",
        "Crying Lightning",
        "Dangerous Animals",
        "Secret Door",
        "Potion Approaching",
        "Fire and the Thud",
        "Cornerstone",
        "Dance Little Liar",
        "Pretty Visitors",
        "The Jeweller's Hands",
      ],
    },
    {
      id: 4,
      title: "Suck It and See",
      year: 2011,
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Suckitandsee.jpg/250px-Suckitandsee.jpg",
      description:
        "A return to melodic songwriting with jangly guitars and romantic themes.",
      tracks: [
        "She's Thunderstorms",
        "Black Treacle",
        "Brick by Brick",
        "The Hellcat Spangled Shalalala",
        "Don't Sit Down 'Cause I've Moved Your Chair",
        "Library Pictures",
        "All My Own Stunts",
        "Reckless Serenade",
        "Piledriver Waltz",
        "Love Is a Laserquest",
        "Suck It and See",
        "That's Where You're Wrong",
      ],
    },
    {
      id: 5,
      title: "AM",
      year: 2013,
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg/250px-%22AM%22_%28Arctic_Monkeys%29.jpg",
      description:
        "Their most commercially successful album, blending rock with hip-hop and R&B influences.",
      tracks: [
        "Do I Wanna Know?",
        "R U Mine?",
        "One for the Road",
        "Arabella",
        "I Want It All",
        "No.1 Party Anthem",
        "Mad Sounds",
        "Fireside",
        "Why'd You Only Call Me When You're High?",
        "Snap Out of It",
        "Knee Socks",
        "I Wanna Be Yours",
      ],
    },
    {
      id: 6,
      title: "Tranquility Base Hotel & Casino",
      year: 2018,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Arctic_Monkeys_%E2%80%93_Tranquility_Base_Hotel_%26_Casino.png/250px-Arctic_Monkeys_%E2%80%93_Tranquility_Base_Hotel_%26_Casino.png",
      description:
        "A concept album set in a lunar resort, featuring piano-driven songs and sci-fi themes.",
      tracks: [
        "Star Treatment",
        "One Point Perspective",
        "American Sports",
        "Tranquility Base Hotel & Casino",
        "Golden Trunks",
        "Four Out of Five",
        "The World's First Ever Monster Truck Front Flip",
        "Science Fiction",
        "She Looks Like Fun",
        "Batphone",
        "The Ultracheese",
      ],
    },
    {
      id: 7,
      title: "The Car",
      year: 2022,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/The_Car_by_Arctic_Monkeys_album.jpg/250px-The_Car_by_Arctic_Monkeys_album.jpg",
      description:
        "A cinematic album with orchestral arrangements and introspective lyrics.",
      tracks: [
        "Sculptures of Anything Goes",
        "Jet Skis on the Moat",
        "Body Paint",
        "The Car",
        "Big Ideas",
        "Hello You",
        "Mr Schwartz",
        "Perfect Sense",
        "Mirrorball",
        "I Ain't Quite Where I Think I Am",
      ],
    },
  ],
  featuredSongs: [
    {
      title: "Do I Wanna Know?",
      album: "AM (2013)",
      description:
        "The iconic opening track with its hypnotic guitar riff and seductive lyrics.",
    },
    {
      title: "I Bet You Look Good on the Dancefloor",
      album: "Whatever People Say I Am, That's What I'm Not (2006)",
      description:
        "Their breakthrough single that captured the energy of British nightlife.",
    },
    {
      title: "Fluorescent Adolescent",
      album: "Favourite Worst Nightmare (2007)",
      description: "A nostalgic anthem about growing up and losing innocence.",
    },
    {
      title: "Four Out of Five",
      album: "Tranquility Base Hotel & Casino (2018)",
      description:
        "A space-age lounge song with clever wordplay and cosmic themes.",
    },
    {
      title: "R U Mine?",
      album: "AM (2013)",
      description:
        "A powerful rock anthem with driving rhythms and intense vocals.",
    },
    {
      title: "Cornerstone",
      album: "Humbug (2009)",
      description:
        "A melancholic ballad about lost love and searching for someone.",
    },
  ],
};

// Function to create album card HTML
function createAlbumCard(album) {
  const tracksList = album.tracks.map((track) => `<li>${track}</li>`).join("");

  return `
    <article class="album-card">
      <div class="album-cover">
        <img src="${album.cover}" alt="${album.title}" />
      </div>
      <div class="album-info">
        <h3>${album.title}</h3>
        <p class="album-year">${album.year}</p>
        <p class="album-description">${album.description}</p>
        <div class="album-tracks">
          <h4>Tracklist:</h4>
          <ol class="track-list">
            ${tracksList}
          </ol>
        </div>
      </div>
    </article>
  `;
}

// Function to create song card HTML
function createSongCard(song) {
  return `
    <div class="song-card">
      <h4>${song.title}</h4>
      <p class="song-album">${song.album}</p>
      <p class="song-description">${song.description}</p>
    </div>
  `;
}

// Function to render albums
function renderAlbums() {
  const albumsGrid = document.querySelector(".albums-grid");
  if (albumsGrid) {
    albumsGrid.innerHTML = musicData.albums
      .map((album) => createAlbumCard(album))
      .join("");
  }
}

// Function to render featured songs
function renderFeaturedSongs() {
  const songsGrid = document.querySelector(".songs-grid");
  if (songsGrid) {
    songsGrid.innerHTML = musicData.featuredSongs
      .map((song) => createSongCard(song))
      .join("");
  }
}

// Function to initialize the page
function initializeMusicPage() {
  renderAlbums();
  renderFeaturedSongs();
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeMusicPage);
