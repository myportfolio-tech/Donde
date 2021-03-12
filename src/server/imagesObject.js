
function createImagesObject(fullResponse){
    
    let images = []; 
    let ids = [];  
  
      for (const image of fullResponse) {
  
          imageObject = {pictureURL: image.webformatURL, author: image.user, tags:image.tags}
          
          if (! (ids.includes(image.id)))
            {
   
              images.push(imageObject);
              ids.push(image.id)
            }
          
          
        }
        return images
  }



module.exports = createImagesObject;