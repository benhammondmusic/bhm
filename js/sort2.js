// Create the List
var options = {
  valueNames: ["album", "songartist", "date"],
};
// Populate the List
var values = [
  {
    album: "Sense",
    songartist: "The Lightning Seeds",
    date: 1992,
  },
  {
    album: "His 'N' Hers",
    songartist: "Pulp",
    date: 1994,
  },
  {
    album: "Heros",
    songartist: "David Bowie",
    date: 1977,
  },
  {
    album: "The Pleasure Principle",
    songartist: "Gary Numan",
    date: 1979,
  },
  {
    album: "Dare!",
    songartist: "The Human League",
    date: 1981,
  },
  {
    album: "Urban Hymns",
    songartist: "The Verve",
    date: 1997,
  },
  {
    album: "The La's",
    songartist: "The La's",
    date: 1990,
  },
  {
    album: "More Songs ABout Buildings and Food",
    songartist: "Talking Heads",
    date: 1978,
  },
  {
    album: "Laid",
    songartist: "James",
    date: 1993,
  },
  {
    album: "Pills 'N' Thrills and Bellyaches",
    songartist: "Happy Mondays",
    date: 1990,
  },
  {
    album: "Different Class",
    songartist: "Pulp",
    date: 1995,
  },
  {
    album: "Be Here Now",
    songartist: "Oasis",
    date: 1997,
  },
  {
    album: "Soul Mining",
    songartist: "The The",
    date: 1983,
  },
  {
    album: "Parklife",
    songartist: "Blur",
    date: 1994,
  },
  {
    album: "Suede",
    songartist: "Suede",
    date: 1993,
  },
  {
    album: "Stone Roses",
    songartist: "The Stone Roses",
    date: 1989,
  },
  {
    album: "Screamadelica",
    songartist: "Primal Scream",
    date: 1991,
  },
  {
    album: "It's Great When You're Straight... Yeah",
    songartist: "Black Grape",
    date: 1995,
  },
  {
    album: "(What's The Story) Morning Glory",
    songartist: "Oasis",
    date: 1995,
  },
  {
    album: "Moseley Shoals",
    songartist: "Ocean Colour Scene",
    date: 1996,
  },
];

// Run the list with default sort
var albums = new List("albums", options, values);
albums.sort("album", {
  order: "asc",
});

// Create Filters
$(".filter").on("click", function () {
  var $q = $(this).attr("data-filter");
  if ($(this).hasClass("active")) {
    albums.filter();
    $(".filter").removeClass("active");
  } else {
    albums.filter(function (item) {
      return item.values().date == $q;
    });
    $(".filter").removeClass("active");
    $(this).addClass("active");
  }
});

// Return # of items
var $count = $(".count");
$count.append(albums.size());
albums.on("filterComplete", function () {
  $count.text(albums.update().matchingItems.length);
});
