import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from "../../actions";
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

class StreamList extends React.Component{
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId){
            return (
              <div className="right floated content">
                  <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                      Edit
                  </Link>
                  <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                      Delete
                  </Link>

              </div>
            );
        }
    };

    renderCreate(){
        if(this.props.isSignedIn){
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    };

    renderList(){
        return this.props.streams.map( stream => {
            return (
              <div className="item" key={stream.id} >
                  {this.renderAdmin(stream)}
                  <Icon color='violet' name='video' size='large' />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header" >
                            {stream.title}
                        </Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
              </div>
            );
        })
    }

    render() {
        return (
            <div>
                <Input fluid icon='video' iconPosition='left' placeholder='Search Classrooms...' />
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(
    mapStateToProps,
    { fetchStreams }
)(StreamList);