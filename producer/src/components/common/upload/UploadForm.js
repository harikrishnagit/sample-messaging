import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { post } from "axios";

class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      data: [],
      program: "",
      solicitationName: ""
    };
    this.uploadURL = "http://localhost:10001/api/v1/postDoc";

    this.fileChange = this.fileChange.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }
  fileInputRef = React.createRef();

  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  fileChange = e => {
    this.setState({ file: e.target.files[0] });
  };

  async uploadFiles(key, value) {
    let program = this.state.program;
    program = key;
    let solicitationName = this.state.solicitationName;
    solicitationName = value;
    this.setState({ program, solicitationName });

    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
    });
  }

  fileUpload = file => {
    let program = this.state.program;
    let solicitationName = this.state.solicitationname;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("program", program);
    formData.append("solicitationName", solicitationName);

    const config = {
      headers: {
        "Content-type": "multipart/form-data"
      }
    };
    return post(this.uploadURL, formData, config)
      .then(function(response) {
        console.log(response);
      })
      .then(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Group widths={"equal"}>
            <Form.Input size={"mini"} type="file" onChange={this.fileChange} />
            <Form.Button
              color="blue"
              content="Upload"
              labelPosition="left"
              icon="upload"
              program={this.props.program}
              solicitationName={this.props.solicitationName}
              onClick={() =>
                this.uploadFiles(
                  this.props.program,
                  this.props.solicitationName
                )
              }
            />
          </Form.Group>
        </Form>
      </React.Fragment>
    );
  }
}

export default UploadForm;
