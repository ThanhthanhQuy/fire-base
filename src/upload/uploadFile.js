import React, {Component} from 'react'
import '../config'
import app from 'firebase'
const storage = app.storage()
const storeRef = storage.ref()

class uploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            success: false,
            message: '',
            download: '',

        }
    }

    chooseFile = e => {
        this.setState({
            file: e.target.files[0],
            message: '',
            success: false
        })
    }

    uploadFile = async () => {
        try {
            const {file} = this.state
            if (!file) {
                this.setState({
                    success: false,
                    message: 'File is emty'
                })
                return
            }
            const userRef = storeRef.child(`/quy/${file.name}.jpg`)
            await userRef.put(file)

            this.setState({
                success: true,
                message: 'Success'
            })
        } catch (e) {
            this.setState({
                success: false,
                message: 'Fail'
            })
        }
    }

    download = async () => {
        try {
            const myRef = storeRef.child(`/quy/quy.jpg`)
           const download = await myRef.getDownloadURL()

            this.setState({
                download,
                success: true,
                message: 'Success'
            })
        }
        catch(e) {
            // co e.code
            this.setState({
                success: false,
                message: 'Fail'
            })
        }
    }

    render() {
        const {file, download, message} = this.state
        return (
            <div>
                <p>{message}</p>
                <input type='file' onChange={this.chooseFile}/>
                <button className='center submit' onClick={this.uploadFile}>UploadFile</button>
                <br />
                <button onClick={this.download}>Download</button>
                <br />
                {download && <img height='100px' width='100px' src={download}></img>}
            </div>
        )
    }
}

export default uploadFile