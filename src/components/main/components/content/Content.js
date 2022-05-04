import React, { useState } from 'react';
import Showdown from "showdown";
import $ from "jquery";

import "./content.scss"


function Content(props) {
  const [data, setData] = useState("Контент..");
  const converter = new Showdown.Converter()

  const { fileName } = props;
  if (fileName) {
    $.ajax({
      url: `/med-booklet/cardsData/${fileName}.txt`,
      dataType: "text",
      success: (data) => setData(converter.makeHtml(data))
    }).done($('#content a').attr('target', '_blank'));
  }

  return ( <div id="content" className="main__content content" dangerouslySetInnerHTML={{__html: data}}/> );
}

export default Content;