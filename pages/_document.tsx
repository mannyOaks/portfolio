import React from "react"
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document"

class Doc extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-300 dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc