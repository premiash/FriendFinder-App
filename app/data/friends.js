// ===============================================================================
// DATA
// Below data will hold all of the data
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
	name: "John Smith",
	photo: "https://s-media-cache-ak0.pinimg.com/200x/7d/a3/3b/7da33bd94132c9b424f685fffaf35b2b.jpg",
	scores: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
  },
  {
	name: "Linda",
	photo: "http://orig07.deviantart.net/1ae7/f/2014/131/5/6/profile_by_aqua1115-d7hzzc1.jpg",
	scores: [2, 2, 3, 4, 2, 5, 4, 5, 2, 1]
  },
    {
	name: "Job Samuel",
	photo: "http://www.messagescollection.com/wp-content/uploads/2015/04/cute-profile-for-facebook.jpg",
	scores: [5, 4, 3, 4, 2, 6, 4, 5, 5, 5]
  },
   	{
	name: "Dora",
	photo: "http://seobuzzworld.com/wp-content/uploads/2012/12/twitter-profile.jpg",
	scores: [1, 4, 3, 4, 1, 5, 3, 5, 5, 1]
  },
    {
	name: "Macintosh",
	photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Rooster_Profile.jpg/464px-Rooster_Profile.jpg.jpg",
	scores: [5, 1, 4, 4, 5, 5, 1, 2, 4, 5]
  },
    {
	name: "Mickey",
	photo: "https://img.clipartfest.com/519777a2c96ef06f0b590be0388fefa4_free-female-icon-clipart-profile-picture-clipart_350-350.jpeg",
	scores: [2, 4, 5, 4, 5, 5, 1, 5, 1, 4]
  },
   	{
	name: "Donald Trump",
	photo: "http://www.messagescollection.com/wp-content/uploads/2015/04/cute-cat-profile-for-facebook.jpg",
	scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
