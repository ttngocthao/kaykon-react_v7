export const uploadImg = (album, image, collection, firebase) => {
  return (dispatch, getState, { getFirestore }) => {
    let progress;
    //firestore for database
    const firestore = getFirestore();
    const albumRef = firestore.collection(collection).doc(album);
    albumRef.get().then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      albumRef.set({
        albumName: album,
        photos: []
      });
    });

    const uploadTask = firebase
      .storage()
      .ref(`${album}/${image.name}`)
      .put(image);

    //firestore.collection("gallery").doc(album).add({})
    uploadTask.on(
      "state_changed",
      function(snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //console.log("Upload is " + progress + "% done");
        progress === 100 && alert("Done!");
      },
      function(err) {
        console.log("err", err);
      },
      function() {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then(function(downloadURL) {
            //const albumRef = firestore.collection("gallery").doc(album);

            //CHECK IF THE ALBUM EXISTS

            albumRef.update({
              photos: firebase.firestore.FieldValue.arrayUnion({
                name: image.name,
                url: downloadURL
              })
            });
          })
          .then(() => {
            dispatch({ type: "IMG_UPLOAD", image: image, progress });
          })
          .catch(function(error) {
            console.log("Error getting document:", error);
          });
      }
    );
  };
};

export const deleteImg = (imageName, imageUrl, albumName, firebase) => {
  return (dispatch, getState, { getFirestore }) => {
    console.log("imageName,albumName from imgAction", imageName, albumName);
    const firestore = getFirestore();

    // Create a reference to the file in database to delete
    const imgRef = firestore.collection("gallery").doc(albumName);
    // Create a reference to the file in store to delete
    const fileRef = firebase.storage().ref(`${albumName}/${imageName}`);
    imgRef
      .update({
        photos: firebase.firestore.FieldValue.arrayRemove({
          name: imageName,
          url: imageUrl
        })
      })
      .then(() => {
        fileRef
          .delete()
          .then(() => {
            dispatch({ type: "IMG_DELETED" });
          })
          .catch(err => {
            dispatch({ type: "IMG_DELETED_ERROR", err });
          });
      });

    // console.log('imgRef',imgRef)
    //dispatch({ type: "IMG_DELETED" });
  };
};
