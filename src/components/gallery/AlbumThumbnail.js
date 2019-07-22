import React from "react";

const AlbumThumbnai = ({ albumName, imgUrls }) => {
  //console.log('imgurls',imgUrls)
  return (
    <div className="album-thumbnail">
      <h3> {albumName}</h3>
    </div>
  );
};

export default AlbumThumbnai;
