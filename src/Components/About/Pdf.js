import React, { Component } from "react";
import { Document, Page, pdfjs, StyleSheet } from "react-pdf";
import pdfStyle from "./Pdf.css";
import pdf from "./cv.pdf";
import style from "../About/About.module.css";
export default class Cv extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }
  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className={style.home}>
        <Document
          height={"200px"}
          width={"100px"}
          file={pdf}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}
