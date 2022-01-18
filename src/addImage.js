function addImage(src){

    const imageContainer = document.createElement('img');
    imageContainer.src = src;
    return(imageContainer);

}

module.exports = addImage;