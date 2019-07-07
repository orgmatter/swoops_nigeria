import React from 'react';
import createReactClass from 'create-react-class';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

export const InputFile = createReactClass({
    count: 0,
    getInitialState: function() {
      return {
        inputFile: [],
        uploadBtn: [],
      }
    },
    getFileState: function() {
        var inputFileState = this.state.inputFile;
        return inputFileState;
    },
    getBtnState: function() {
        var btnState = this.state.uploadBtn;
        return btnState;
    },
    render: function() {
            //console.log(this.state.inputFile.length + this.state.inputFile);
        const inputFiles = this.state.inputFile.map((jsxFile, index) => {
            return (
                jsxFile.fileJSX
            )
        });

        const uploadBtns = this.state.uploadBtn.map(jsxBtn => {
            return (
              <div>
                {jsxBtn.btnJSX}<br />{jsxBtn.txtJSX}
              </div>
            )
        });

      return (
        <FormControl>
          <Button 
            variant='raised'
            onClick={this.addInputFile}
          >
            Add file
          </Button><br />

        {inputFiles}<br />
        {uploadBtns}<br />
        </FormControl>
      )
    },
    addInputFile: function(e) {
        this.count += 1;
        var inputFileState = this.getFileState();
        var btnState = this.getBtnState();
        //console.log(inputFileState);
        //console.log(btnState);
        
        var fileJSX = <input
                        type='file'
                        name={'file' + this.count}
                        style={{display: 'none'}}
                        ref={fileInput => this.fileInput = fileInput}
                        className='fileInputs'
                        />;
        var btnJSX =   <Button
                        onClick={() => this.fileInput.click()}
                        ref={uploadBtn => this.uploadBtn = uploadBtn}
                        >
                        {'Upload file '+ this.count}
                        </Button>;
        var txtJSX = <input
                        type='text'
                        name={'text' + this.count}
                        className='textInputs'
                        />;
        var inputJSXFiles = {
            fileJSX
         }; 
        var uploadJSXBtns = {
            btnJSX
        }; 
        var inputJSXTxts = {
            txtJSX
        }; 
        this.getFileState().push(inputJSXFiles);
        this.getBtnState().push(uploadJSXBtns,inputJSXTxts);
      this.setState({
        inputFile: this.getFileState(),
        uploadBtn: this.getBtnState(),
      })
    },

  });