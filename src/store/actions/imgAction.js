export const uploadImg = (album, image, collection, firebase) => {
  return (dispatch, getState, { getFirestore }) => {
    let progress;
    //firestore for database
    const firestore = getFirestore();
    const albumRef = firestore.collection(collection).doc(album);
    //check if the document is existed
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

    uploadTask.on(
      "state_changed",
      function(snapshot) {
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
  };
};

export const deleteAlbum = (albumName, firebase) => {
  return (dispatch, getState, { getFirestore }) => {
    //check how many photos in the album
    const firestore = getFirestore();
    const albumRef = firestore.collection("gallery").doc(albumName);
    //check how many photos in the album
    albumRef
      .get()
      .then(doc => {
        const photosLength = doc.data().photos.length;
        console.log(photosLength);
        if (photosLength === 0) {
          //albumRef.delete();
          alert("yes");
        } else {
          alert("You need to delete all photos first!");
        }
      })
      .then(() => {
        dispatch({ type: "DELETE_ALBUM" });
      });
    // .then(()=>{
    //   albumRef.update({
    //   albumName: firebase.firestore.FieldValue.delete(),
    //   photos: firebase.firestore.FieldValue.delete()
    // });
    // })
    //if there is no photos in the album, remove albumName field in the document
  };
};
