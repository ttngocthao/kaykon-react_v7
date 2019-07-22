import React from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Album = props => {
  const styles = {
    backgroundColor: "coral",
    margin: "20px auto",
    width: "100%"
  };
  console.log("props", props);
  const { albumData } = props;
  return (
    <div style={styles}>
      <h2>{albumData && albumData.albumName}</h2>
      <ul>
        {albumData &&
          albumData.imgUrls.map((url, indx) => {
            return (
              <li key={indx}>
                <img alt={albumData.albumName + "_img" + indx} src={url} />
              </li>
            );
          })}
      </ul>
      {/* {album && album.map(item=>{
        return <img src={item.imgUrl} alt={item.imgName}/>
      })} */}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps, "ownProps");
  // console.log('album',state)
  const albumName = ownProps.match.params.albumName;
  const gallery = state.firestore.data.gallery;
  const albumData = gallery ? gallery[albumName] : null;
  return { albumData: albumData };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "gallery" }])
)(Album);
//export default (Album)
