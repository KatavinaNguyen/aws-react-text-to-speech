import '../App.css'

const Section = ({text, setText, convertTextToSpeech}) => {

    return (
        <div className="section-container">
            <textarea className="text-area"
                value={text}
                style={{padding: 15}}
                placeholder='Type your text in the box below, then click the play button to hear it converted to speech.'
                onChange={(e) => setText(e.target.value)}>
            </textarea>
            <button className='btn-convert' onClick={() => convertTextToSpeech()} >Convert to Speech</button>
        </div>
    )
}

export default Section
