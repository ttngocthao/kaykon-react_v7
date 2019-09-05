//import moment from "moment";
import uid from "uid";
export const getExcurList = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    let excursionList = [];
    firestore
      .collection("excursion")
      .orderBy("date", "desc")
      .get()
      .then(querySnapshot => {
        if (querySnapshot) {
          querySnapshot.forEach(function(doc) {
            excursionList.push({
              id: doc.id,
              date: doc.data().date.toDate(),
              name: doc.data().name,
              text: doc.data().text,
              imgUrl: doc.data().image.url,
              imgName: doc.data().image.name
            });
          });
        }
        //console.log(querySnapshot)
      })
      .then(() => {
        console.log("excursion list", excursionList);
        dispatch({ type: "GET_EXCUR", excursionList });
      });
  };
};

export const openExcurForm = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "OPEN_FORM", openForm: true });
  };
};
export const closeExcurForm = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "CLOSE_FORM", openForm: false });
  };
};

export const createNewExcur = (newExcur, firebase) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const imgId = uid();
    let progress;
    //let excursionList = [];
    //create a document in firebase
    const firestore = getFirestore();
    const uploadTask = firebase
      .storage()
      .ref(`excursion/${imgId}-${newExcur.image.name}`)
      .putString(newExcur.imageB64, "data_url");
    firestore
      .collection("excursion")
      .add({
        name: newExcur.name,
        text: newExcur.text,
        date: newExcur.date,
        image: { name: "", url: "" }
      })
      .then(docRef => {
        uploadTask.on(
          "state_changed",
          function(snapshot) {
            progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //console.log("Upload is " + progress + "% done");
            progress === 100 && console.log("upload is done");
          },
          function(err) {
            console.log("err", err);
          },
          function() {
            //get the url to add to database
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then(function(downloadURL) {
                firestore
                  .collection("excursion")
                  .doc(docRef.id)
                  .update({
                    image: {
                      name: `${imgId}-${newExcur.image.name}`,
                      url: downloadURL
                    }
                  });
              })
              // .then(() => {
              //   getExcurList();
              // })
              .then(() => {
                dispatch({
                  type: "CREATE_EXCUR"
                });
              })
              .catch(function(err) {
                console.log("Error create excursion:", err);
              });
          }
        );
      });
    //upload the file to the store
    //console.log('docRef',docRef)///////////////
  };
};

export const deleteExcur = (excurId, imageName, firebase) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("testing1", excurId, imageName);
    let excursionList = [];
    const firestore = getFirestore();
    // Create a reference to the doc in database to delete
    const docRef = firestore.collection("excursion").doc(excurId);
    // Create a reference to the file in store to delete
    //to use this, make sure import connectFirebase in the component
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const imgFileRef = storageRef.child(`excursion/${imageName}`);
    docRef.delete().then(() => {
      imgFileRef.delete().then(() => {
        firestore
          .collection("excursion")
          .orderBy("date", "desc")
          .get()
          .then(querySnapshot => {
            if (querySnapshot) {
              querySnapshot.forEach(function(doc) {
                excursionList.push({
                  id: doc.id,
                  date: doc.data().date.toDate(),
                  name: doc.data().name,
                  text: doc.data().text,
                  imgUrl: doc.data().image.url,
                  imgName: doc.data().image.name
                });
              });
            }
          })
          .then(() => {
            // setTimeout(() => this.setState({message:''}), 3000);
            dispatch({ type: "ARTICLE_DELETED", excursionList });
          })
          .catch(err => {
            dispatch({ type: "ARTICLE_DELETED_ERROR", err });
          });
      });
    });
  };
};
