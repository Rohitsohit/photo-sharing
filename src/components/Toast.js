import React from 'react'

export default function Toast(message) {
  
  var  mstring = message.error +"";
  const startIndex = mstring.indexOf(':') + 2;
  const endIndex = mstring.lastIndexOf(':');

  const extractedMessage = mstring.substring(startIndex, endIndex).trim();

  mstring = " ";

  return (
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  {extractedMessage}
</button>
  )
}
