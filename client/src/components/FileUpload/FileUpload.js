import React from "react";

export const FileUpload = () => {
  return (
    <div>
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input
          type="file"
          className="custom-file-input"
          name="myImage"
          onChange={this.onChange}
        />
        {console.log(this.state.file)}
        <button className="upload-button" type="submit">
          Upload to DB
        </button>
      </form>
    </div>
  );
};
