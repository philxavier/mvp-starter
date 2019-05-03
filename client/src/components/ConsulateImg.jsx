import React, { Component } from 'react'
import { Image, Popup } from 'semantic-ui-react'

const consulateImg = ({...rest }) => (
  <div className="consulateStyle grow" {...rest} >
   {/* {console.log('this is props', props)} */}
    <Popup
        // classP={props.classP}
        trigger={<Image src="https://s3-us-west-1.amazonaws.com/mvp-sprint/Consulate.png" />}
        // category={props.category}header={user.name}
        // boss={props.boss}
      />
    {/* <img src="https://s3-us-west-1.amazonaws.com/mvp-sprint/Consulate.png" alt="" height="27" width="22"/>   */}
  </div>
);

export default consulateImg