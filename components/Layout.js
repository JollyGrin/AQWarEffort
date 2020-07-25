import React, { Component, Fragment } from 'react';
import Head from 'next/head';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>AQ War Effort</title>
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
          <link rel='stylesheet' type='text/css' href='css/reset.css' />
          <link rel='stylesheet' type='text/css' href='css/styles.css' />
        </Head>
        {this.props.children}

        <script
          src='https://wow.zamimg.com/widgets/power.js'
          async={true}
        ></script>
      </Fragment>
    );
  }
}
