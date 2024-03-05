import { Button, Dialog, DialogActions, DialogContent, Paper, TextField } from '@mui/material'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CachedIcon from '@mui/icons-material/Cached';
import DownloadIcon from '@mui/icons-material/Download';
import CollectionsIcon from '@mui/icons-material/Collections';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GifIcon from '@mui/icons-material/Gif';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from 'react'

const AiComponent = () => {
    const [showAi, setShowAi] = useState( false )
    const [open, setOpen] = useState( false );
    const [focusCheck, setFocusCheck] = useState( false )
    const [message, setMessage] = useState( '' )
    const [prompt, setPrompt] = useState( '' )
    const [generate, setGenerate] = useState( false )
    const [generativeText, setGenerativeText] = useState( {
        before: '', after: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
    } )

    const handleOpen = () => {
        setOpen( true );
    };

    const handleClose = () => {
        setOpen( false );
        setFocusCheck( false );
        setShowAi( false );
        setGenerate( false )
    };

    return (
        <React.Fragment>
            <Dialog
                fullWidth={ 'sm' }
                open={ open }
                onClose={ () => { handleClose() } }
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent className='bg-[#F9FAFB]'>
                    { generate &&
                        <div className='mb-3'>
                            <div style={ { textAlign: '-webkit-right' } }>
                                <div className='text-right max-w-[75%] w-fit bg-gray-300 py-2 ps-2 pe-5 rounded mb-3'>
                                    { generativeText.before }
                                </div>
                            </div>
                            <div>
                                <div className=' max-w-[75%] w-fit bg-[#DBEAFE] py-2 ps-2 pe-5 rounded'>
                                    { generativeText.after }
                                </div>
                            </div>
                        </div>
                    }
                    <TextField value={ prompt } variant="outlined" placeholder='Your prompt' className='w-[100%] bg-white' onChange={ ( e ) => { setPrompt( e.target.value ); !generate && setGenerativeText( { ...generativeText, before: e.target.value } ) } } />
                </DialogContent>
                <DialogActions className='bg-[#F9FAFB]'>
                    { generate ?
                        <div className='flex items-center justify-end'>
                            <Button variant='outlined' style={ { marginInlineEnd: '10px', color: 'gray' } } onClick={ () => { setMessage( generativeText.after ); handleClose() } } autoFocus>
                                <DownloadIcon />  Insert
                            </Button>
                            <Button variant='contained' autoFocus>
                                <CachedIcon />  Regenerate
                            </Button>
                        </div>
                        : <Button variant='contained' onClick={ () => { setGenerate( true ); setPrompt( '' ) } } disabled={ prompt.length === 0 } autoFocus>
                            <KeyboardDoubleArrowRightIcon />  Generate
                        </Button> }

                </DialogActions>
            </Dialog>
            <Paper
                component="form"
                variant='filled'
                onMouseLeave={ () => { focusCheck && setShowAi( false ) } }
                onMouseEnter={ () => { focusCheck && setShowAi( true ) } }
                className='w-[100%] items-end p-3 h-[29%]'
            >
                <div className='relative'>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        variant="filled"
                        value={ message }
                        onChange={ ( e ) => setMessage( e.target.value ) }
                        rows={ 4 }
                        onFocus={ ( e ) => { setShowAi( true ); setFocusCheck( true ) } }
                        onBlur={ () => { setFocusCheck( false ) } }
                        placeholder='Write a message...'
                        className='w-[100%] border-b-0'
                    />
                    <div onClick={ handleOpen } >{ showAi && <AutoFixHighIcon color='primary' className='absolute bottom-5 right-8 bg-white  p-1 rounded-full cursor-pointer' /> }</div>
                </div>
                <div className='my-4 pt-7 border-t '>
                    <div className='flex justify-between items-center w-[100%]'>
                        <div className='flex justify-between w-[30%]'>
                            <CollectionsIcon />
                            <AttachFileIcon />
                            <GifIcon />
                            <InsertEmoticonIcon />
                        </div>
                        <div className='flex items-center justify-between w-[20%]'>
                            <Button variant='contained' sx={ { borderRadius: '40px' } } disabled={ true } autoFocus>
                                Send
                            </Button>
                            <MoreHorizIcon />
                        </div>
                    </div>
                </div>
            </Paper>
        </React.Fragment>
    )
}

export default AiComponent