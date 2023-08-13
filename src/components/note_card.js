import React from "react"
import { Link } from 'gatsby';

const NoteCard = ({data}) => {

    const title = data.frontmatter.title
    const tags = data.frontmatter.tags.join(' | ')
    const date = data.frontmatter.update
    const text = data.rawMarkdownBody.replace('\n','').replace('#','').slice(0, 50) + '...'

    function formatDate(dt) {
        dt = new Date(dt)
        var y = dt.getFullYear();
        var m = ('00' + (dt.getMonth() + 1)).slice(-2);
        var d = ('00' + dt.getDate()).slice(-2);
        return [y, m, d];
    }


    return (
        <div className="py-4 px-4 lg:w-1/2">
            <div style={{"alignItems": "flex-start", "display": "flex"}}>
                <div style={{"textAlign": "center"}}> 
                    <span className="note-date">{formatDate(date)[0]}</span>
                    <hr/>
                    <span className="note-date">{formatDate(date)[1]+'/'+formatDate(date)[2]}</span>
                </div>
                <div style={{"paddingLeft": "1.5rem"}}>
                    <Link to={`/note/${title}`}>
                        <div className="note-tag">{tags}</div>
                        <div className="note-title">{title}</div>
                    </Link>
                    <hr/>
                    <p className="note-text">{text}</p>
                </div> 
            </div>
        </div>
    )
}

export default NoteCard



