import React, { Fragment } from "react";

const AlbumThumbnai = ({ albumName, imgUrls, length, auth, deleteHandle }) => {
  //console.log('imgurls',imgUrls)

  return (
    <Fragment>
      <div className="album-thumbnail__content">
        <h4> {albumName}</h4>
        {/* <h5>
          {length} {length > 1 ? "images" : "image"}
        </h5> */}
      </div>
    </Fragment>
  );
};

export default AlbumThumbnai;
