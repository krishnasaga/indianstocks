import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {props.headComponents}
      <link rel="preconnect" href="https://fonts.gstatic.com"/>

      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"/>
      <script>
        {`html,body{
        
        font-family: 'inter';
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
      }`}
      </script>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}></script>
      <script>
        {
          `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', ${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </script>
      <style>
        {`
          .react-vis-magic-css-import-rule {
          display: inherit;
        }

          .rv-treemap {
          font-size: 12px;
          position: relative;
          '-webkit-font-smoothing': 'antialiased'
        }

          .rv-treemap__leaf {
          overflow: hidden;
          position: absolute;
        }

          .rv-treemap__leaf--circle {
          align-items: center;
          border-radius: 100%;
          display: flex;
          justify-content: center;
        }

          .rv-treemap__leaf__content {
          overflow: hidden;
          padding: 10px;
          text-overflow: ellipsis;
        }

          .rv-xy-plot {
          color: #c3c3c3;
          position: relative;
        }

          .rv-xy-plot canvas {
          pointer-events: none;
        }

          .rv-xy-plot .rv-xy-canvas {
          pointer-events: none;
          position: absolute;
        }

          .rv-xy-plot__inner {
          display: block;
        }

          .rv-xy-plot__axis__line {
          fill: none;
          stroke-width: 2px;
          stroke: #e6e6e9;
        }

          .rv-xy-plot__axis__tick__line {
          stroke: #e6e6e9;
        }

          .rv-xy-plot__axis__tick__text {
          fill: #6b6b76;
          font-size: 11px;
        }

          .rv-xy-plot__axis__title text {
          fill: #6b6b76;
          font-size: 11px;
        }

          .rv-xy-plot__grid-lines__line {
          stroke: #e6e6e9;
        }

          .rv-xy-plot__circular-grid-lines__line {
          fill-opacity: 0;
          stroke: #e6e6e9;
        }

          .rv-xy-plot__circular-grid-lines__line {
          fill-opacity: 0;
          stroke: #e6e6e9;
        }

          .rv-xy-plot__series,
          .rv-xy-plot__series path {
          pointer-events: all;
        }

          .rv-xy-plot__series--line {
          fill: none;
          stroke: #000;
          stroke-width: 2px;
        }

          .rv-crosshair {
          position: absolute;
          font-size: 11px;
          pointer-events: none;
        }

          .rv-crosshair__line {
          background: #47d3d9;
          width: 1px;
        }

          .rv-crosshair__inner {
          position: absolute;
          text-align: left;
          top: 0;
        }

          .rv-crosshair__inner__content {
          border-radius: 4px;
          background: #3a3a48;
          color: #fff;
          font-size: 12px;
          padding: 7px 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

          .rv-crosshair__inner--left {
          right: 4px;
        }

          .rv-crosshair__inner--right {
          left: 4px;
        }

          .rv-crosshair__title {
          font-weight: bold;
          white-space: nowrap;
        }

          .rv-crosshair__item {
          white-space: nowrap;
        }

          .rv-hint {
          position: absolute;
          pointer-events: none;
        }

          .rv-hint__content {
          border-radius: 4px;
          padding: 7px 10px;
          font-size: 12px;
          background: #3a3a48;
          box-shadow: 0 2px 4px rgba(0,0,0,0.5);
          color: #fff;
          text-align: left;
          white-space: nowrap;
        }

          .rv-discrete-color-legend {
          box-sizing: border-box;
          overflow-y: auto;
          font-size: 12px;
        }

          .rv-discrete-color-legend.horizontal {
          white-space: nowrap;
        }

          .rv-discrete-color-legend-item {
          color: #3a3a48;
          border-radius: 1px;
          padding: 9px 10px;
        }

          .rv-discrete-color-legend-item.horizontal {
          display: inline-block;
        }

          .rv-discrete-color-legend-item.horizontal .rv-discrete-color-legend-item__title {
          margin-left: 0;
          display: block;
        }

          .rv-discrete-color-legend-item__color {
          background: #dcdcdc;
          display: inline-block;
          height: 2px;
          vertical-align: middle;
          width: 14px;
        }

          .rv-discrete-color-legend-item__title {
          margin-left: 10px;
        }

          .rv-discrete-color-legend-item.disabled {
          color: #b8b8b8;
        }

          .rv-discrete-color-legend-item.clickable {
          cursor: pointer;
        }

          .rv-discrete-color-legend-item.clickable:hover {
          background: #f9f9f9;
        }

          .rv-search-wrapper {
          display: flex;
          flex-direction: column;
        }

          .rv-search-wrapper__form {
          flex: 0;
        }

          .rv-search-wrapper__form__input {
          width: 100%;
          color: #a6a6a5;
          border: 1px solid #e5e5e4;
          padding: 7px 10px;
          font-size: 12px;
          box-sizing: border-box;
          border-radius: 2px;
          margin: 0 0 9px;
          outline: 0;
        }

          .rv-search-wrapper__contents {
          flex: 1;
          overflow: auto;
        }

          .rv-continuous-color-legend {
          font-size: 12px;
        }

          .rv-continuous-color-legend .rv-gradient {
          height: 4px;
          border-radius: 2px;
          margin-bottom: 5px;
        }

          .rv-continuous-size-legend {
          font-size: 12px;
        }

          .rv-continuous-size-legend .rv-bubbles {
          text-align: justify;
          overflow: hidden;
          margin-bottom: 5px;
          width: 100%;
        }

          .rv-continuous-size-legend .rv-bubble {
          background: #d8d9dc;
          display: inline-block;
          vertical-align: bottom;
        }

          .rv-continuous-size-legend .rv-spacer {
          display: inline-block;
          font-size: 0;
          line-height: 0;
          width: 100%;
        }

          .rv-legend-titles {
          height: 16px;
          position: relative;
        }

          .rv-legend-titles__center,
          .rv-legend-titles__left,
          .rv-legend-titles__right {
          position: absolute;
          white-space: nowrap;
          overflow: hidden;
        }

          .rv-legend-titles__center {
          display: block;
          text-align: center;
          width: 100%;
        }

          .rv-legend-titles__right {
          right: 0;
        }

          .rv-radial-chart .rv-xy-plot__series--label {
          pointer-events: none;
        }
        
        
        
        `}
      </style>
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div sx={{overflowX: 'hidden'}}
         key={`body`}
         id="___gatsby"
         dangerouslySetInnerHTML={{__html: props.body}}
    />
    {props.postBodyComponents}

    </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
