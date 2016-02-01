//META{"name":"GifAvatar"}*//
function GifAvatar() {}

GifAvatar.prototype.getName = function() {
	return "Gif Avatar Enabler";
};

GifAvatar.prototype.getDescription = function() {
	return "Adds functionality to set GIF Avatars";
};

GifAvatar.prototype.getVersion = function() {
	return "1.0";
};

GifAvatar.prototype.getAuthor = function() {
	return "weareeleven27";
};


GifAvatar.prototype.load = function() {
};

GifAvatar.prototype.unload = function() {
};

GifAvatar.prototype.start = function() {

//todo: cover the avatars of other people who use the plugin, 
//e.g. button to active so this plugin recognizes it
	
function getAvatarXYpos(div.avatar-large)
{
   if (!div.avatar-large)
   {
      return {"x":0,"y":0};
   }
   var xy={"x":div.avatar-large.offsetLeft,"y":div.avatar-large.offsetTop}
   var par=getXYpos(div.div.avatar-large.offsetParent);
   for (var key in par)
   {
      xy[key]+=par[key];
   }
   return xy;
}

function setStamp()
{
	// create a new element.. the one that we will place on top, in this case it will be from the database
	var new_avatar = document.createAvatar('img');
	// set the source for the image element
	new_avatar.setAttribute('src', 'http://i.imgur.com/2wscq1C.jpg');
	// add an id to the element so we could find it later
	new_avatar.setAttribute('id', 'photoStamp');
	// set absolute position to the new element
	new_avatar.style.position = 'absolute';
	// this is the picture we need to set the stamp on
	var main_avatar = document.getElementById('userAvatar');
	// get the coordinates for this "parent"
	var big_coordinates=getAvatarXYpos(main_avatar);
	var bp_x = big_coordinates['x'];
	var bp_y = big_coordinates['y'];
	// set these values for the new created element
	new_avatar.style.left =  bp_x + 'px';
	new_avatar.style.top = bp_y + 'px';
	// get the container for the picture
	var container = document.getElementById('userAvatarContainer');
	// add the new element as child for the container
	container.appendChild(new_avatar);
	window.onresize=setStamp;
	avatar-large.parentNode.removeChild(avatar-large);
	}	
}

GifAvatar.prototype.stop = function() {
    
};

GifAvatar.prototype.update = function() {
};
