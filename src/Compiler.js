import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/tomorrow_night_eighties';

function onChange(newValue) {
  console.log('change',newValue);
}
export default class Compiler extends Component{
      render() {
        return (
            <AceEditor
            mode="javascript"
            width="100%"
            theme="tomorrot_night_eightes"
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{$blockScrolling: true}}
          />
        );
      }
    }