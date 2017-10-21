import { deleteCampus, removeCampus } from '../store';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';


export function DeleteCampus (props) {
  console.log('props', props);
  const campus = props.name;

    return (
      <div className="card" >
        <form
          id="new-message-form"
          onSubmit={props.handleSubmit}
          >
            <h3>Not impressed by {campus}? <br /> Click here to delete this campus!</h3>
            <button className="delete-btn" type="submit"
            >Delete!
            </button>
        </form>
      </div>
    )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleSubmit(evt){
      evt.preventDefault();
      const id = ownProps.id;
      const history = ownProps.props.history;

      dispatch(removeCampus(id));
      dispatch(deleteCampus(id));
      history.push('/campuses');

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCampus);

