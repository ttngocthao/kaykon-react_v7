//FieldValue = require('firebase-admin').firestore.FieldValue;
//import 'firebase-admin'
//import {admin} from 'firebase-admin'

export const uploadImg = (album, image, firebase) => {
  return (dispatch, getState, { getFirestore }) => {
    let progress;
    const firestore = getFirestore();
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
      function(err) {},
      function() {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          const albumRef = firestore.collection("gallery").doc(album);
          //const FieldValue = firebase.firestore.FieldValue;

          //CHECK IF THE ALBUM EXISTS
          albumRef
            .get()
            .then(function(doc) {
              if (doc.exists) {
                console.log("Document data:", doc.data());
                albumRef.update({
                  imgUrls: firebase.firestore.FieldValue.arrayUnion(downloadURL)
                });
              } else {
                // doc.data() will be undefined in this case
                //console.log("No such document!");
                albumRef.set({ albumName: album, imgUrls: [downloadURL] });
              }
            })
            .catch(function(error) {
              console.log("Error getting document:", error);
            });

          dispatch({ type: "IMG_UPLOAD", image: image, progress });
        });
      }
    );
  };
};
